
import React, { useState } from 'react';
// Added Button to the MUI imports
import { Container, Typography, Box, Grid, Tab, Tabs, Card, CardMedia, Chip, Button } from '@mui/material';

const GALLERY_IMAGES = [
  { id: 1, title: 'Mountain Residence', category: 'residential', img: 'https://images.unsplash.com/photo-1594818371393-324628bed359?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Tech Hub Commercial', category: 'commercial', img: 'https://images.unsplash.com/photo-1559302995-f0a1bc1548de?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Smart Home Hub', category: 'residential', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Industrial Array', category: 'commercial', img: 'https://images.unsplash.com/photo-1466611653911-954ffea11271?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Eco Cabin Kit', category: 'residential', img: 'https://images.unsplash.com/photo-1592833159057-6fdc2a5c317a?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'City Rooftop Install', category: 'commercial', img: 'https://images.unsplash.com/photo-1613665813446-82a78c44b8fe?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'Farmstead Off-Grid', category: 'residential', img: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43759?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Solar Farm Alpha', category: 'commercial', img: 'https://images.unsplash.com/photo-1548337138-e8df27224385?auto=format&fit=crop&q=80&w=800' }
];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <Container maxWidth="lg" className="py-20">
      <Box className="text-center mb-16">
        <Typography variant="overline" className="text-amber-600 font-bold tracking-widest">VISUALIZING IMPACT</Typography>
        <Typography variant="h2" className="font-black text-slate-800 mb-6">Installation Gallery</Typography>
        <Typography variant="h6" className="text-slate-500 font-light max-w-2xl mx-auto">
          Explore real-world examples of how we've helped homeowners and businesses switch to renewable energy.
        </Typography>
      </Box>

      <Box className="mb-12 flex justify-center">
        <Tabs 
          value={filter} 
          onChange={(_, val) => setFilter(val)} 
          className="bg-slate-100 p-1 rounded-full"
          indicatorColor="primary"
          textColor="primary"
          sx={{
            '& .MuiTabs-indicator': { backgroundColor: '#fbbf24', height: '100%', borderRadius: '50px', zIndex: 0, opacity: 0.2 },
            '& .MuiTab-root': { zIndex: 1, minHeight: 48, px: 4, borderRadius: '50px', fontWeight: 'bold' }
          }}
        >
          <Tab label="All Projects" value="all" />
          <Tab label="Residential" value="residential" />
          <Tab label="Commercial" value="commercial" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card className="group relative overflow-hidden rounded-2xl shadow-lg border-none">
              <CardMedia
                component="img"
                height="300"
                image={item.img}
                alt={item.title}
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <Chip 
                  label={item.category.toUpperCase()} 
                  size="small" 
                  className="w-fit bg-amber-400 text-slate-900 font-bold mb-2" 
                />
                <Typography variant="h6" className="text-white font-black leading-tight">
                  {item.title}
                </Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="mt-20 p-12 bg-slate-900 rounded-[40px] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <Typography variant="h4" className="font-black mb-4">Start Your Own Solar Journey</Typography>
        <Typography className="text-slate-400 mb-8 max-w-lg mx-auto">Join the thousands of happy customers who have switched to SolarDirect and started saving today.</Typography>
        <Button 
          variant="contained" 
          className="bg-amber-400 text-slate-900 hover:bg-amber-500 font-black px-10 py-4 rounded-full"
        >
          Get a Free Quote
        </Button>
      </Box>
    </Container>
  );
};

export default GalleryPage;
