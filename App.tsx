
import React, { useState, useMemo } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  IconButton, 
  Badge, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Button
} from '@mui/material';
import { 
  ShoppingCart, 
  Menu as MenuIcon, 
  Home as HomeIcon, 
  Store as StoreIcon, 
  AutoAwesome as AiIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { Page, CartItem, Product } from './types';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AIAdvisorPage from './pages/AIAdvisorPage';
import CartDrawer from './components/CartDrawer';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const navigateTo = (page: Page, productId?: string) => {
    setCurrentPage(page);
    if (productId) setSelectedProductId(productId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage onShopClick={() => navigateTo(Page.SHOP)} onAiClick={() => navigateTo(Page.AI_ADVISOR)} />;
      case Page.SHOP:
        return <ShopPage onProductSelect={(id) => navigateTo(Page.PRODUCT_DETAIL, id)} onAddToCart={addToCart} />;
      case Page.PRODUCT_DETAIL:
        return <ProductDetail productId={selectedProductId!} onAddToCart={addToCart} onBack={() => navigateTo(Page.SHOP)} />;
      case Page.AI_ADVISOR:
        return <AIAdvisorPage onShopClick={() => navigateTo(Page.SHOP)} />;
      default:
        return <HomePage onShopClick={() => navigateTo(Page.SHOP)} onAiClick={() => navigateTo(Page.AI_ADVISOR)} />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'slate.800', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className="flex justify-between">
            <Box className="flex items-center cursor-pointer" onClick={() => navigateTo(Page.HOME)}>
              <div className="bg-amber-400 p-2 rounded-lg mr-2">
                <HomeIcon className="text-white" />
              </div>
              <Typography variant="h6" className="font-bold text-slate-800 tracking-tight">
                SOLAR<span className="text-amber-500">DIRECT</span>
              </Typography>
            </Box>

            <Box className="hidden md:flex space-x-8">
              <Button onClick={() => navigateTo(Page.HOME)} color="inherit" className="font-medium capitalize hover:text-amber-500">Home</Button>
              <Button onClick={() => navigateTo(Page.SHOP)} color="inherit" className="font-medium capitalize hover:text-amber-500">Shop</Button>
              <Button onClick={() => navigateTo(Page.AI_ADVISOR)} color="inherit" className="font-medium capitalize text-amber-600 bg-amber-50 px-4 rounded-full border border-amber-200">
                <AiIcon className="mr-1 text-sm" /> AI Advisor
              </Button>
            </Box>

            <Box className="flex items-center">
              <IconButton onClick={() => setIsCartOpen(true)} className="ml-2">
                <Badge badgeContent={cartCount} color="warning">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <IconButton className="md:hidden ml-2" onClick={() => setIsMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Navigation Drawer */}
      <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box className="flex justify-between items-center mb-6">
            <Typography variant="h6" className="font-bold">Menu</Typography>
            <IconButton onClick={() => setIsMenuOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <List>
            <ListItem button onClick={() => navigateTo(Page.HOME)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => navigateTo(Page.SHOP)}>
              <ListItemText primary="Shop Products" />
            </ListItem>
            <ListItem button onClick={() => navigateTo(Page.AI_ADVISOR)}>
              <ListItemText primary="AI Solar Advisor" className="text-amber-600 font-bold" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
        onUpdateQty={updateQuantity}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Typography variant="h6" className="text-white font-bold mb-4">SOLARDIRECT</Typography>
              <p className="mb-4 max-w-sm">Empowering the world with clean, renewable energy. Quality solar products delivered directly to your door.</p>
              <div className="flex space-x-4">
                {/* Social icons placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
              </div>
            </div>
            <div>
              <Typography variant="subtitle1" className="text-white font-bold mb-4">Links</Typography>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-400">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400">Installation Guide</a></li>
                <li><a href="#" className="hover:text-amber-400">Warranty Policy</a></li>
                <li><a href="#" className="hover:text-amber-400">Support</a></li>
              </ul>
            </div>
            <div>
              <Typography variant="subtitle1" className="text-white font-bold mb-4">Contact</Typography>
              <ul className="space-y-2">
                <li>123 Solar Way, Helios City</li>
                <li>contact@solardirect.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            &copy; 2024 SolarDirect. All rights reserved.
          </div>
        </Container>
      </footer>
    </Box>
  );
};

export default App;
