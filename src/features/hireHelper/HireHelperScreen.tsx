import React, { useState } from 'react'
import { HireHelperHeader } from './HireHelperHeader'
import { HelpersList, Helper } from './HelpersList'
import { HireHelperFooter } from './HireHelperFooter'

interface HireHelperScreenProps {
  onClose: () => void
}

const HireHelperScreen: React.FC<HireHelperScreenProps> = ({ onClose }) => {
  const [isDark, setIsDark] = useState(true)

  const helpers: Helper[] = [
    {
      id: 1,
      emoji: '👩‍🍳',
      name: 'Chef Maria',
      level: 2,
      productivity: 1.8,
      hirePrice: 300,
    },
    {
      id: 2,
      emoji: '👨‍🍳',
      name: 'Baker Bob',
      level: 3,
      productivity: 2.4,
      hirePrice: 500,
    },
    {
      id: 3,
      emoji: '🧑‍🍳',
      name: 'Pastry Pro',
      level: 4,
      productivity: 3.2,
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
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-bgSecondary dark:bg-bgDark min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-bgLight dark:bg-deepDark rounded-3xl shadow-2xl overflow-hidden border border-borderLight dark:border-borderDark flex flex-col h-[600px]">
          <HireHelperHeader onClose={onClose} />
          <HelpersList helpers={helpers} onHire={handleHire} />
          <HireHelperFooter onClose={onClose} />
        </div>

        {/* Theme Toggle */}
        <div className="fixed bottom-4 right-4 flex gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-full bg-bgLight dark:bg-cardDark shadow-xl border border-borderLight dark:border-borderDark flex items-center justify-center"
          >
            <span className="material-icons text-textLight dark:text-primary">
              brightness_4
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HireHelperScreen
