
import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  TextField, 
  Button, 
  Slider, 
  Switch, 
  FormControlLabel, 
  CircularProgress,
  Grid,
  Divider,
  Fade
} from '@mui/material';
import { AutoAwesome, Bolt, Payments, CalendarMonth, LocalAtm } from '@mui/icons-material';
import { getSolarRecommendation } from '../services/geminiService';
import { SolarCalculationResult } from '../types';

interface AIAdvisorPageProps {
  onShopClick: () => void;
}

const AIAdvisorPage: React.FC<AIAdvisorPageProps> = ({ onShopClick }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolarCalculationResult | null>(null);
  
  // Form State
  const [bill, setBill] = useState(150);
  const [location, setLocation] = useState('San Francisco, CA');
  const [roofArea, setRoofArea] = useState(50);
  const [isCommercial, setIsCommercial] = useState(false);

  const handleCalculate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const data = await getSolarRecommendation(bill, location, roofArea, isCommercial);
      if (data) setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" className="py-12">
      <Box className="text-center mb-12">
        <Typography variant="h3" className="font-black text-slate-800 mb-4">AI Solar Advisor</Typography>
        <Typography variant="h6" className="text-slate-500 font-light max-w-xl mx-auto">
          Get a professional system sizing and ROI analysis in seconds using our Gemini AI engine.
        </Typography>
      </Box>

      <Paper className="p-8 rounded-3xl shadow-xl border border-slate-100 mb-12">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography className="font-bold mb-2 text-slate-700">Average Monthly Electricity Bill ($)</Typography>
            <Box className="px-2 pt-8 pb-4">
              <Slider 
                value={bill} 
                onChange={(_, v) => setBill(v as number)} 
                min={50} 
                max={1000} 
                step={10}
                valueLabelDisplay="on"
                className="text-amber-500"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className="font-bold mb-2 text-slate-700">Available Roof Area (sq meters)</Typography>
            <Box className="px-2 pt-8 pb-4">
              <Slider 
                value={roofArea} 
                onChange={(_, v) => setRoofArea(v as number)} 
                min={10} 
                max={500} 
                step={5}
                valueLabelDisplay="on"
                className="text-emerald-500"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography className="font-bold mb-2 text-slate-700">Installation City / State</Typography>
            <TextField 
              fullWidth 
              variant="outlined" 
              placeholder="e.g. Dallas, Texas" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-slate-50 rounded-xl"
            />
          </Grid>
          <Grid item xs={12} md={4} className="flex items-end">
            <FormControlLabel
              control={<Switch checked={isCommercial} onChange={(e) => setIsCommercial(e.target.checked)} color="warning" />}
              label={<Typography className="font-bold text-slate-700">Commercial Site</Typography>}
              className="mb-2"
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              fullWidth 
              size="large"
              className="bg-amber-500 hover:bg-amber-600 py-4 font-black text-xl shadow-lg rounded-2xl"
              onClick={handleCalculate}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AutoAwesome />}
            >
              {loading ? 'Analyzing with AI...' : 'Generate AI Report'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Fix: Explicitly pass children to Fade to resolve TypeScript error where it's not recognized from JSX content */}
      <Fade 
        in={Boolean(result)} 
        timeout={800} 
        unmountOnExit
        children={
          <Box>
            {result && (
              <>
                <Typography variant="h4" className="font-black text-slate-800 mb-8 text-center">Your Customized Solar Plan</Typography>
                <Grid container spacing={3} className="mb-8">
                  <Grid item xs={6} md={3}>
                    <Paper className="p-6 text-center bg-blue-50 border border-blue-100 rounded-2xl h-full">
                      <Bolt className="text-blue-500 mb-2" />
                      <Typography className="text-xs font-bold text-blue-600 uppercase mb-1">Panels Needed</Typography>
                      <Typography variant="h4" className="font-black text-slate-800">{result.panelsNeeded}</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Paper className="p-6 text-center bg-emerald-50 border border-emerald-100 rounded-2xl h-full">
                      <Payments className="text-emerald-500 mb-2" />
                      <Typography className="text-xs font-bold text-emerald-600 uppercase mb-1">Annual Savings</Typography>
                      <Typography variant="h4" className="font-black text-slate-800">${result.annualSavings.toLocaleString()}</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Paper className="p-6 text-center bg-amber-50 border border-amber-100 rounded-2xl h-full">
                      <CalendarMonth className="text-amber-500 mb-2" />
                      <Typography className="text-xs font-bold text-amber-600 uppercase mb-1">Payback Period</Typography>
                      <Typography variant="h4" className="font-black text-slate-800">{result.paybackPeriod} yrs</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Paper className="p-6 text-center bg-slate-900 border border-slate-800 rounded-2xl h-full">
                      <LocalAtm className="text-amber-400 mb-2" />
                      <Typography className="text-xs font-bold text-slate-400 uppercase mb-1">Estimated Cost</Typography>
                      <Typography variant="h4" className="font-black text-white">${result.estimatedCost.toLocaleString()}</Typography>
                    </Paper>
                  </Grid>
                </Grid>

                <Paper className="p-8 rounded-3xl border-2 border-amber-100 bg-amber-50/30 mb-10">
                  <Typography variant="h6" className="font-black text-slate-800 mb-4 flex items-center">
                    <AutoAwesome className="text-amber-500 mr-2" /> AI Expert Insights
                  </Typography>
                  <Typography className="text-lg text-slate-700 italic leading-relaxed">
                    "{result.recommendation}"
                  </Typography>
                </Paper>

                <Box className="flex justify-center gap-4">
                  <Button 
                    variant="contained" 
                    size="large" 
                    className="bg-slate-900 px-8 py-3 rounded-xl font-bold"
                    onClick={onShopClick}
                  >
                    Browse Recommended Hardware
                  </Button>
                </Box>
              </>
            )}
          </Box>
        }
      />
    </Container>
  );
};

export default AIAdvisorPage;
