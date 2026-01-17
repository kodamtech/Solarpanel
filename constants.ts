
import { Product } from './types';

export const SOLAR_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'EcoPower 450W Monocrystalline',
    description: 'Ultra-high efficiency solar panel designed for residential rooftops. Features PERC technology for superior low-light performance.',
    price: 299,
    category: 'panels',
    image: 'https://picsum.photos/seed/solar1/600/400',
    efficiency: '21.5%',
    warranty: '25 Years',
    rating: 4.8
  },
  {
    id: 'p2',
    name: 'SunGuardian Battery 10kWh',
    description: 'Stackable lithium-iron phosphate battery storage system. Keep your home powered through the night and during outages.',
    price: 5499,
    category: 'batteries',
    image: 'https://picsum.photos/seed/battery1/600/400',
    efficiency: '95% Round-trip',
    warranty: '10 Years',
    rating: 4.9
  },
  {
    id: 'p3',
    name: 'SmartFlow Hybrid Inverter 5kW',
    description: 'Advanced hybrid inverter that manages both solar generation and battery storage seamlessly with mobile app tracking.',
    price: 1250,
    category: 'inverters',
    image: 'https://picsum.photos/seed/inverter1/600/400',
    efficiency: '97.6%',
    warranty: '12 Years',
    rating: 4.7
  },
  {
    id: 'p4',
    name: 'Off-Grid Cabin Kit Pro',
    description: 'Complete DIY solar kit including 4 panels, charge controller, cables, and 24V battery bank. Perfect for remote cabins.',
    price: 2100,
    category: 'kits',
    image: 'https://picsum.photos/seed/kit1/600/400',
    efficiency: 'All-inclusive',
    warranty: '5 Years Overall',
    rating: 4.5
  },
  {
    id: 'p5',
    name: 'MaxEfficiency 550W Bifacial',
    description: 'Captures sunlight from both sides, increasing yield by up to 25%. Ideal for ground-mounted commercial arrays.',
    price: 450,
    category: 'panels',
    image: 'https://picsum.photos/seed/solar2/600/400',
    efficiency: '22.8%',
    warranty: '30 Years',
    rating: 5.0
  },
  {
    id: 'p6',
    name: 'Compact Portable Solar 100W',
    description: 'Foldable solar charger with USB-C and DC outputs. Charge your laptop and phones while camping or on the road.',
    price: 159,
    category: 'panels',
    image: 'https://picsum.photos/seed/portable1/600/400',
    efficiency: '23%',
    warranty: '2 Years',
    rating: 4.6
  }
];
