import type { AvailableHelper, Order, Customer } from '../store/types'

export const initialAvailableHelpers: AvailableHelper[] = [
  {
    id: '1',
    emoji: '👩',
    name: 'Sue',
    hirePrice: 150,
    level: 1,
    productivity: 1.2,
  },
  {
    id: '2',
    emoji: '👨',
    name: 'Dan',
    hirePrice: 400,
    level: 1,
    productivity: 2.5,
  },
  {
    id: '3',
    emoji: '👴',
    name: 'Joe',
    hirePrice: 800,
    level: 1,
    productivity: 3.0,
  },
  {
    id: '4',
    emoji: '👩‍🍳',
    name: 'Maria',
    hirePrice: 1200,
    level: 1,
    productivity: 4.2,
  },
  {
    id: '5',
    emoji: '🧑',
    name: 'Tom',
    hirePrice: 600,
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
