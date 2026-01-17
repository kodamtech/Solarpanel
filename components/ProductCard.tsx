
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Rating, Box } from '@mui/material';
import { AddShoppingCart, ArrowForward } from '@mui/icons-material';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (id: string) => void;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, onAdd }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border border-slate-100">
      <div className="relative group overflow-hidden">
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          onClick={() => onSelect(product.id)}
        />
        <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.category.toUpperCase()}
        </div>
      </div>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start mb-2">
          <Typography variant="h6" className="font-bold text-slate-800 text-sm md:text-base leading-tight">
            {product.name}
          </Typography>
          <Typography variant="h6" className="font-bold text-amber-600 ml-2">
            ${product.price}
          </Typography>
        </div>
        <Rating value={product.rating} precision={0.1} size="small" readOnly className="mb-2" />
        <Typography variant="body2" color="text.secondary" className="line-clamp-2 mb-4 text-xs">
          {product.description}
        </Typography>
        <div className="flex flex-col gap-2 mt-auto">
          <Button 
            variant="contained" 
            fullWidth 
            className="bg-amber-500 hover:bg-amber-600 text-white capitalize shadow-none font-bold"
            startIcon={<AddShoppingCart />}
            onClick={() => onAdd(product)}
          >
            Add to Cart
          </Button>
          <Button 
            variant="outlined" 
            fullWidth 
            className="border-slate-200 text-slate-600 hover:bg-slate-50 capitalize font-medium"
            endIcon={<ArrowForward className="text-sm" />}
            onClick={() => onSelect(product.id)}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
