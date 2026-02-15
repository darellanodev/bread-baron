import type { AvailableHelper, Order, Customer } from '@/store/types'
import {
  WORKER_PRODUCTIVITY_RANGE,
  WORKER_PRICE_RANGE,
} from '@/constants/gameConstants'

export const initialAvailableHelpers: AvailableHelper[] = [
  {
    id: '1',
    emoji: '👩',
    name: 'Sue',
    hirePricePerMonth: 150,
    level: 1,
    productivity: 1.2,
  },
  {
    id: '2',
    emoji: '👨',
    name: 'Dan',
    hirePricePerMonth: 400,
    level: 1,
    productivity: 2.5,
  },
  {
    id: '3',
    emoji: '👴',
    name: 'Joe',
    hirePricePerMonth: 800,
    level: 1,
    productivity: 3.0,
  },
  {
    id: '4',
    emoji: '👩‍🍳',
    name: 'Maria',
    hirePricePerMonth: 1200,
    level: 1,
    productivity: 4.2,
  },
  {
    id: '5',
    emoji: '🧑',
    name: 'Tom',
    hirePricePerMonth: 600,
    level: 1,
    productivity: 2.8,
  },
]

export const initialOrders: Order[] = [
  {
    id: '1',
    difficulty: 'Medium',
    difficultyColor: 'text-primary',
    title: 'Rustic Bread Batch',
    price: 150,
    progress: 0,
    maxProgress: 10,
  },
  {
    id: '2',
    difficulty: 'Hard',
    difficultyColor: 'text-orange-600',
    title: 'Gourmet Croissants',
    price: 500,
    progress: 0,
    maxProgress: 25,
  },
]

export const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'The Mayor',
    totalOrders: 2,
    orders: [
      {
        id: 'c1-1',
        difficulty: 'Medium',
        difficultyColor: 'text-primary',
        title: 'Rustic Bread Batch',
        price: 150,
        progress: 0,
        maxProgress: 10,
      },
      {
        id: 'c1-2',
        difficulty: 'Hard',
        difficultyColor: 'text-orange-600',
        title: 'Gourmet Croissants',
        price: 500,
        progress: 0,
        maxProgress: 25,
      },
    ],
  },
  {
    id: '2',
    name: 'Construction Worker',
    totalOrders: 1,
    orders: [
      {
        id: 'c2-1',
        difficulty: 'Medium',
        difficultyColor: 'text-primary',
        title: 'Rustic Bread Batch',
        price: 150,
        progress: 0,
        maxProgress: 10,
      },
    ],
  },
  {
    id: '3',
    name: 'Village Baker',
    totalOrders: 1,
    orders: [
      {
        id: 'c3-1',
        difficulty: 'Hard',
        difficultyColor: 'text-orange-600',
        title: 'Gourmet Croissants',
        price: 500,
        progress: 0,
        maxProgress: 25,
      },
    ],
  },
]

// Additional customer names for dynamic generation
export const customerNames = [
  'Tourist',
  'Local Resident',
  'Business Owner',
  'Food Critic',
  'Event Planner',
  'School Teacher',
  'Office Worker',
  'Grandmother',
  'College Student',
  'Chef',
  'Restaurant Owner',
  'Hotel Manager',
]

// Possible order types for dynamic generation
export const orderTypes: Omit<Order, 'id' | 'progress'>[] = [
  {
    difficulty: 'Easy',
    difficultyColor: 'text-green-600',
    title: 'Simple Muffins',
    price: 80,
    maxProgress: 5,
  },
  {
    difficulty: 'Easy',
    difficultyColor: 'text-green-600',
    title: 'Plain Bagels',
    price: 100,
    maxProgress: 6,
  },
  {
    difficulty: 'Medium',
    difficultyColor: 'text-primary',
    title: 'Rustic Bread Batch',
    price: 150,
    maxProgress: 10,
  },
  {
    difficulty: 'Medium',
    difficultyColor: 'text-primary',
    title: 'Cinnamon Rolls',
    price: 200,
    maxProgress: 12,
  },
  {
    difficulty: 'Medium',
    difficultyColor: 'text-primary',
    title: 'Chocolate Cookies',
    price: 180,
    maxProgress: 11,
  },
  {
    difficulty: 'Hard',
    difficultyColor: 'text-orange-600',
    title: 'Gourmet Croissants',
    price: 500,
    maxProgress: 25,
  },
  {
    difficulty: 'Hard',
    difficultyColor: 'text-orange-600',
    title: 'Wedding Cake',
    price: 800,
    maxProgress: 30,
  },
  {
    difficulty: 'Hard',
    difficultyColor: 'text-orange-600',
    title: 'Artisan Sourdough',
    price: 600,
    maxProgress: 28,
  },
  {
    difficulty: 'Expert',
    difficultyColor: 'text-red-600',
    title: 'Macaron Collection',
    price: 1200,
    maxProgress: 40,
  },
  {
    difficulty: 'Expert',
    difficultyColor: 'text-red-600',
    title: 'Royal Pastries',
    price: 1500,
    maxProgress: 45,
  },
]

// Available worker names for dynamic generation
export const workerNames = [
  'Alex',
  'Sarah',
  'Mike',
  'Emma',
  'David',
  'Lisa',
  'John',
  'Anna',
  'Tom',
  'Julia',
  'Chris',
  'Sue',
  'Dan',
  'Joe',
  'Maria',
  'Robert',
  'Jennifer',
  'Michael',
  'Laura',
  'Kevin',
]

// Emojis disponibles para workers
export const workerEmojis = [
  '👨',
  '👩',
  '🧑',
  '👴',
  '👵',
  '👨‍🍳',
  '👩‍🍳',
  '🧑‍🍳',
  '👨‍🌾',
  '👩‍🌾',
]

// Productivity and price ranges for random workers
// Re-export from constants for backwards compatibility
export const workerProductivityRange = WORKER_PRODUCTIVITY_RANGE
export const workerPriceRange = WORKER_PRICE_RANGE
