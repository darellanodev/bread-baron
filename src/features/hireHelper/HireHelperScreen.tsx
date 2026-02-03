import React, { useState } from 'react'
import { Worker } from '../game/components/Worker'

interface Helper {
  id: number
  emoji: string
  name: string
  level: number
  productivity: number
  hirePrice: number
}

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
      <div className="bg-slate-200 dark:bg-slate-900 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white dark:bg-black rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col h-[600px]">
          {/* Header */}
          <div className="bg-gray-100 dark:bg-[#222] px-6 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
            <h1 className="text-gray-600 dark:text-gray-300 font-bold tracking-widest text-lg uppercase flex-grow text-center ml-8">
              Hire a New Helper
            </h1>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black dark:bg-gray-800 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <span className="material-icons text-sm">close</span>
            </button>
          </div>

          {/* Helpers List */}
          <div className="flex-grow bg-black p-6 overflow-y-auto">
            <div className="space-y-4">
              {helpers.map((helper) => (
                <div
                  key={helper.id}
                  className="flex items-center justify-between bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/60 transition-colors"
                >
                  <Worker
                    emoji={helper.emoji}
                    name={helper.name}
                    level={helper.level}
                    productivity={helper.productivity}
                    upgradePrice={helper.hirePrice}
                    onUpgrade={() => handleHire(helper.id)}
                  />
                  <div className="ml-4">
                    <button
                      onClick={() => handleHire(helper.id)}
                      className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all shadow-lg"
                    >
                      Hire ${helper.hirePrice}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-300 dark:bg-gray-700 p-6 flex justify-center border-t border-gray-400 dark:border-gray-600">
            <button
              onClick={onClose}
              className="bg-black text-white px-12 py-2 rounded-xl text-lg font-bold tracking-widest uppercase hover:bg-gray-900 transition-colors shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireHelperScreen
