
import React from 'react';
import { Container, Typography, Button, Box, Grid, Card } from '@mui/material';
import { EnergySavingsLeaf, FlashOn, SupportAgent, AutoAwesome } from '@mui/icons-material';

interface HomePageProps {
  onShopClick: () => void;
  onAiClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onShopClick, onAiClick }) => {
  return (
    <Box>
      {/* Hero Section */}
      <Box className="relative bg-slate-900 overflow-hidden h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1920" 
            alt="Solar Farm" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
        <Container maxWidth="lg" className="relative z-10">
          <div className="max-w-2xl text-white">
            <Typography variant="overline" className="text-amber-400 font-bold tracking-widest">
              CLEAN ENERGY FOR THE FUTURE
            </Typography>
            <Typography variant="h1" className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Switch to Solar, <br /><span className="text-amber-400">Save Massive.</span>
            </Typography>
            <Typography variant="h6" className="text-slate-300 mb-8 font-light max-w-lg">
              Unlock the power of the sun with our high-efficiency panels and smart storage systems. Expert guidance, AI tools, and seamless installation.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="contained" 
                size="large" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 text-lg shadow-xl"
                onClick={onShopClick}
              >
                Explore Products
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg"
                onClick={onAiClick}
                startIcon={<AutoAwesome />}
              >
                Free AI Analysis
              </Button>
            </div>
          </div>
        </Container>
      </Box>

      {/* Stats/Feature Grid */}
      <Container maxWidth="lg" className="py-20">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <EnergySavingsLeaf className="text-emerald-600 text-3xl" />
              </div>
              <Typography variant="h5" className="font-bold mb-3">Eco-Friendly</Typography>
              <p className="text-slate-600">Reduce your carbon footprint by over 2.5 tons of CO2 annually per residential system.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FlashOn className="text-blue-600 text-3xl" />
              </div>
              <Typography variant="h5" className="font-bold mb-3">Instant Savings</Typography>
              <p className="text-slate-600">Lower your electricity bill by up to 90% from the first day of system activation.</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <SupportAgent className="text-amber-600 text-3xl" />
              </div>
              <Typography variant="h5" className="font-bold mb-3">Expert Support</Typography>
              <p className="text-slate-600">Our team and AI advisor assist you from initial planning to final setup.</p>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* AI Teaser Section */}
      <Box className="bg-amber-50 py-20">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <img 
                src="https://images.unsplash.com/photo-1558444479-c8f01052877a?auto=format&fit=crop&q=80&w=800" 
                alt="Solar Rooftop" 
                className="rounded-3xl shadow-2xl"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className="font-black text-slate-800 mb-6">
                Not sure what you need? <br /><span className="text-amber-600">Our AI knows.</span>
              </Typography>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Using advanced reasoning, our Solar Advisor analyzes your energy consumption, location, and roof specs to provide a tailored list of components and expected ROI. No guesswork, just results.
              </p>
              <Button 
                variant="contained" 
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl"
                onClick={onAiClick}
                startIcon={<AutoAwesome />}
              >
                Try Solar Advisor
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box className="bg-amber-400 py-16">
        <Container maxWidth="md" className="text-center">
          <Typography variant="h4" className="text-white font-black mb-6">Ready to Power Your Home with Clean Energy?</Typography>
          <Button 
            variant="contained" 
            className="bg-white text-amber-500 hover:bg-slate-100 font-black px-10 py-4 text-xl rounded-full"
            onClick={onShopClick}
          >
            SHOP ALL PRODUCTS
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
