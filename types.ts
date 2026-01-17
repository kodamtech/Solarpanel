
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'panels' | 'inverters' | 'batteries' | 'kits';
  image: string;
  efficiency: string;
  warranty: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SolarCalculationResult {
  panelsNeeded: number;
  estimatedCost: number;
  annualSavings: number;
  paybackPeriod: number;
  recommendation: string;
}

export enum Page {
  HOME = 'home',
  SHOP = 'shop',
  PRODUCT_DETAIL = 'detail',
  CART = 'cart',
  AI_ADVISOR = 'ai-advisor',
  CHECKOUT = 'checkout',
  ABOUT = 'about',
  CONTACT = 'contact',
  GALLERY = 'gallery'
}
