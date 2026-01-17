
import React, { useMemo } from 'react';
import { Container, Grid, Typography, Box, Button, Rating, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton, Tooltip } from '@mui/material';
import { ArrowBack, CheckCircle, VerifiedUser, HighQuality, LocalShipping, Facebook, Twitter, Pinterest, Share } from '@mui/icons-material';
import { SOLAR_PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  productId: string;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onAddToCart, onBack }) => {
  const product = useMemo(() => SOLAR_PRODUCTS.find(p => p.id === productId), [productId]);

  if (!product) return <div>Product not found.</div>;

  const handleShare = (platform: 'facebook' | 'twitter' | 'pinterest') => {
    const url = window.location.href;
    const text = `Check out this amazing ${product.name} at SolarDirect!`;
    const media = product.image;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(text)}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container maxWidth="lg" className="py-12">
      <Button 
        startIcon={<ArrowBack />} 
        onClick={onBack} 
        className="mb-8 text-slate-600 font-bold hover:bg-slate-50"
      >
        Back to Catalog
      </Button>

      <Grid container spacing={8}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box className="sticky top-24">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-3xl shadow-lg border border-slate-100" 
            />
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={`https://picsum.photos/seed/${product.id}${i}/200`} alt="gallery" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </Box>
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={6}>
          <Chip label={product.category.toUpperCase()} className="bg-amber-100 text-amber-700 font-black mb-4" />
          <Typography variant="h3" className="font-black text-slate-800 mb-2 leading-tight">
            {product.name}
          </Typography>
          <div className="flex items-center space-x-4 mb-6">
            <Rating value={product.rating} readOnly precision={0.1} />
            <span className="text-slate-500 font-medium">({Math.floor(Math.random() * 100) + 20} reviews)</span>
          </div>

          <Typography variant="h4" className="text-amber-600 font-black mb-6">
            ${product.price.toLocaleString()}
          </Typography>

          <Divider className="mb-8" />

          <Typography className="text-slate-600 text-lg leading-relaxed mb-8">
            {product.description}
          </Typography>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl">
              <Typography className="text-xs text-slate-500 font-bold uppercase mb-1">Efficiency</Typography>
              <Typography className="font-black text-slate-800">{product.efficiency}</Typography>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <Typography className="text-xs text-slate-500 font-bold uppercase mb-1">Warranty</Typography>
              <Typography className="font-black text-slate-800">{product.warranty}</Typography>
            </div>
          </div>

          <Box className="mb-10">
            <Typography variant="subtitle1" className="font-bold mb-4">Key Features</Typography>
            <List className="p-0">
              <ListItem className="px-0 py-1">
                <ListItemIcon className="min-w-[32px]"><CheckCircle className="text-emerald-500 text-sm" /></ListItemIcon>
                <ListItemText primary="High-performance cell technology" />
              </ListItem>
              <ListItem className="px-0 py-1">
                <ListItemIcon className="min-w-[32px]"><CheckCircle className="text-emerald-500 text-sm" /></ListItemIcon>
                <ListItemText primary="Durability tested for heavy wind/snow loads" />
              </ListItem>
              <ListItem className="px-0 py-1">
                <ListItemIcon className="min-w-[32px]"><CheckCircle className="text-emerald-500 text-sm" /></ListItemIcon>
                <ListItemText primary="Anti-reflective surface for better yield" />
              </ListItem>
            </List>
          </Box>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              variant="contained" 
              fullWidth
              size="large"
              className="bg-amber-500 hover:bg-amber-600 py-4 font-black text-lg shadow-xl"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </Button>
            <Button 
              variant="outlined" 
              fullWidth
              size="large"
              className="border-slate-800 text-slate-800 hover:bg-slate-50 py-4 font-black text-lg"
            >
              Contact Specialist
            </Button>
          </div>

          {/* Social Sharing Section */}
          <Box className="mb-10 flex items-center space-x-4">
            <Typography variant="subtitle2" className="text-slate-500 font-bold flex items-center uppercase tracking-wider">
              <Share className="text-sm mr-2" /> Share:
            </Typography>
            <div className="flex space-x-2">
              {/* Fix: Explicitly pass children prop to Tooltip to satisfy strict TypeScript definitions */}
              <Tooltip 
                title="Share on Facebook"
                children={
                  <IconButton 
                    onClick={() => handleShare('facebook')}
                    className="bg-[#1877F2] text-white hover:bg-[#166fe5] shadow-sm"
                    size="small"
                  >
                    <Facebook fontSize="small" />
                  </IconButton>
                }
              />
              {/* Fix: Explicitly pass children prop to Tooltip to satisfy strict TypeScript definitions */}
              <Tooltip 
                title="Share on Twitter"
                children={
                  <IconButton 
                    onClick={() => handleShare('twitter')}
                    className="bg-[#000000] text-white hover:bg-[#333333] shadow-sm"
                    size="small"
                  >
                    <Twitter fontSize="small" />
                  </IconButton>
                }
              />
              {/* Fix: Explicitly pass children prop to Tooltip to satisfy strict TypeScript definitions */}
              <Tooltip 
                title="Share on Pinterest"
                children={
                  <IconButton 
                    onClick={() => handleShare('pinterest')}
                    className="bg-[#E60023] text-white hover:bg-[#ad001a] shadow-sm"
                    size="small"
                  >
                    <Pinterest fontSize="small" />
                  </IconButton>
                }
              />
            </div>
          </Box>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center text-center p-2 border border-slate-100 rounded-lg">
              <VerifiedUser className="text-slate-400 mb-1" />
              <Typography className="text-[10px] font-bold text-slate-500 uppercase">Secure Payment</Typography>
            </div>
            <div className="flex flex-col items-center text-center p-2 border border-slate-100 rounded-lg">
              <HighQuality className="text-slate-400 mb-1" />
              <Typography className="text-[10px] font-bold text-slate-500 uppercase">Quality Insured</Typography>
            </div>
            <div className="flex flex-col items-center text-center p-2 border border-slate-100 rounded-lg">
              <LocalShipping className="text-slate-400 mb-1" />
              <Typography className="text-[10px] font-bold text-slate-500 uppercase">Safe Delivery</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
