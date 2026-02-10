import type { AvailableHelper, Order, Customer } from '../store/types'

export const initialAvailableHelpers: AvailableHelper[] = [
  {
    id: '1',
    emoji: '👩',
    name: 'Apprentice Sue',
    hirePrice: 150,
    level: 1,
    productivity: 1.2,
  },
  {
    id: '2',
    emoji: '👨',
    name: 'Kneader Dan',
    hirePrice: 400,
    level: 1,
    productivity: 2.5,
  },
  {
    id: '3',
    emoji: '👴',
    name: 'Master Baker Joe',
    hirePrice: 800,
    level: 2,
    productivity: 3.0,
  },
  {
    id: '4',
    emoji: '👩‍🍳',
    name: 'Chef Maria',
    hirePrice: 1200,
    level: 3,
    productivity: 4.2,
  },
  {
    id: '5',
    emoji: '🧑‍🍳',
    name: 'Pastry Expert Tom',
    hirePrice: 600,
    level: 2,
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
  {
    id: '3',
    difficulty: 'Easy',
    difficultyColor: 'text-green-500',
    title: 'Daily Baguettes',
    price: 40,
    progress: 0,
    maxProgress: 5,
    isInactive: true,
  },
]

export const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'The Mayor',
    wants: '5x Rustic Bread',
  },
  {
    id: '2',
    name: 'Construction Worker',
    wants: '2x Croissants',
  },
  {
    id: '3',
    name: 'Village Baker',
    wants: '10x Dough Bags',
  },
]
