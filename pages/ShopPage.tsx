
import React, { useState, useMemo } from 'react';
import { Container, Typography, Grid, Box, Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SOLAR_PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface ShopPageProps {
  onProductSelect: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ onProductSelect, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return SOLAR_PRODUCTS.filter(p => {
      const matchesCategory = activeTab === 'all' || p.category === activeTab;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <Container maxWidth="lg" className="py-12">
      <Box className="mb-10 text-center">
        <Typography variant="h3" className="font-black text-slate-800 mb-4">Shop Solar Hardware</Typography>
        <Typography variant="h6" className="text-slate-500 font-light max-w-2xl mx-auto">
          High-performance components from trusted brands. Build your custom system today.
        </Typography>
      </Box>

      <Box className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={activeTab} 
            onChange={(_, val) => setActiveTab(val)} 
            textColor="primary" 
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="All Products" value="all" className="font-bold" />
            <Tab label="Solar Panels" value="panels" className="font-bold" />
            <Tab label="Inverters" value="inverters" className="font-bold" />
            <Tab label="Batteries" value="batteries" className="font-bold" />
            <Tab label="Kits" value="kits" className="font-bold" />
          </Tabs>
        </Box>
        <TextField 
          placeholder="Search products..."
          variant="outlined"
          size="small"
          className="max-w-md w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search className="text-slate-400" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {filteredProducts.length > 0 ? (
        <Grid container spacing={4}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} onSelect={onProductSelect} onAdd={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box className="py-20 text-center">
          <Typography variant="h6" className="text-slate-400">No products found matching your criteria.</Typography>
        </Box>
      )}
    </Container>
  );
};

export default ShopPage;
