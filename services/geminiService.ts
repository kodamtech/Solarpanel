
import { GoogleGenAI, Type } from "@google/genai";

/**
 * Service to get solar installation recommendations using Gemini AI.
 * Handles calculation of panels, costs, and savings based on user input.
 */
export const getSolarRecommendation = async (
  monthlyBill: number,
  location: string,
  roofArea: number,
  isCommercial: boolean
) => {
  // Always create a new instance to ensure up-to-date configuration from environment variables
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Act as a Solar Energy Expert. Based on these details:
    - Average Monthly Electricity Bill: $${monthlyBill}
    - Location: ${location}
    - Available Roof Area: ${roofArea} sq meters
    - Property Type: ${isCommercial ? 'Commercial' : 'Residential'}

    Provide a detailed recommendation in JSON format including:
    - panelsNeeded (number)
    - estimatedCost (approximate USD)
    - annualSavings (approximate USD)
    - paybackPeriod (years)
    - recommendation (2-3 sentences of professional advice)`;

  try {
    // Using gemini-3-pro-preview for complex reasoning, planning, and math-heavy tasks
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            panelsNeeded: {
              type: Type.NUMBER,
              description: 'The number of solar panels required.',
            },
            estimatedCost: {
              type: Type.NUMBER,
              description: 'The approximate total cost in USD.',
            },
            annualSavings: {
              type: Type.NUMBER,
              description: 'Estimated annual electricity bill savings.',
            },
            paybackPeriod: {
              type: Type.NUMBER,
              description: 'Number of years to break even on investment.',
            },
            recommendation: {
              type: Type.STRING,
              description: 'Expert advice regarding the system configuration.',
            },
          },
          propertyOrdering: ["panelsNeeded", "estimatedCost", "annualSavings", "paybackPeriod", "recommendation"],
        },
      },
    });

    // Extract text and clean potential markdown before parsing
    let jsonStr = response.text?.trim() || '{}';
    if (jsonStr.includes('```')) {
      jsonStr = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
    }
    
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return null;
  }
};
