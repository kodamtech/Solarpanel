
import React from 'react';
import { 
  Drawer, 
  Box, 
  Typography, 
  IconButton, 
  List, 
  ListItem, 
  Button, 
  Divider 
} from '@mui/material';
import { Close as CloseIcon, Delete, Add, Remove } from '@mui/icons-material';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box sx={{ width: { xs: '100vw', sm: 400 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box className="p-4 flex justify-between items-center bg-slate-50 border-b">
          <Typography variant="h6" className="font-bold">Your Cart ({items.length})</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Box className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center mt-20">
              <div className="bg-slate-100 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CloseIcon className="text-slate-400 text-3xl" />
              </div>
              <Typography variant="h6" color="text.secondary">Your cart is empty</Typography>
              <Button onClick={onClose} className="mt-4 text-amber-600 font-bold">Start Shopping</Button>
            </div>
          ) : (
            <List>
              {items.map((item) => (
                <ListItem key={item.id} className="flex-col items-start px-0 py-4">
                  <div className="flex w-full mb-3">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border" />
                    <div className="ml-4 flex-grow">
                      <Typography className="font-bold text-slate-800 line-clamp-1">{item.name}</Typography>
                      <Typography color="text.secondary" className="text-sm font-medium mb-1">${item.price}</Typography>
                      <div className="flex items-center space-x-2">
                        <IconButton size="small" onClick={() => onUpdateQty(item.id, -1)} className="border">
                          <Remove fontSize="small" />
                        </IconButton>
                        <span className="font-bold px-2">{item.quantity}</span>
                        <IconButton size="small" onClick={() => onUpdateQty(item.id, 1)} className="border">
                          <Add fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                    <IconButton color="error" onClick={() => onRemove(item.id)}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </div>
                  <Divider className="w-full" />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {items.length > 0 && (
          <Box className="p-6 bg-slate-50 border-t">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h6" className="text-slate-600">Subtotal</Typography>
              <Typography variant="h5" className="font-bold text-slate-800">${total.toLocaleString()}</Typography>
            </div>
            <Button 
              variant="contained" 
              fullWidth 
              size="large"
              className="bg-amber-500 hover:bg-amber-600 py-3 font-bold text-lg shadow-none"
            >
              Checkout Now
            </Button>
            <p className="text-xs text-center text-slate-500 mt-4">Taxes and shipping calculated at checkout.</p>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
