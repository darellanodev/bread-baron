import React from 'react'
import DarkModeToggle from '../../components/ui/DarkModeToggle'
import {
  HireHelperHeader,
  HelpersList,
  Helper,
  HireHelperFooter,
} from './layout'

interface HireHelperScreenProps {
  onClose: () => void
}

const HireHelperScreen: React.FC<HireHelperScreenProps> = ({ onClose }) => {
  const helpers: Helper[] = [
    {
      id: 1,
      emoji: '👩‍🍳',
      name: 'Chef Maria',
      hirePrice: 300,
    },
    {
      id: 2,
      emoji: '👨‍🍳',
      name: 'Baker Bob',
      hirePrice: 500,
    },
    {
      id: 3,
      emoji: '🧑‍',
      name: 'Pastry Pro',
      hirePrice: 750,
    },
  ]

  const handleHire = (id: number) => {
    const helper = helpers.find((h) => h.id === id)
    if (helper) {
      console.log(`Hired ${helper.name} for $${helper.hirePrice}`)
      // Here you would typically update the game state
      // For now, just close the modal
      onClose()
    }
  }

  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-screen flex items-center justify-center p-4">
      <DarkModeToggle />
      <div className="w-full max-w-2xl bg-bgLight dark:bg-deepDark rounded-3xl shadow-2xl overflow-hidden border border-borderLight dark:border-borderDark flex flex-col h-[600px]">
        <HireHelperHeader onClose={onClose} />
        <HelpersList helpers={helpers} onHire={handleHire} />
        <HireHelperFooter onClose={onClose} />
      </div>
    </div>
  )
}

export default HireHelperScreen
