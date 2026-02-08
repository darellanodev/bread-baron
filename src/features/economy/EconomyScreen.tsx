import React from 'react'
import { EconomyHeader, EconomyChart, EconomyFooter } from './layout'

interface EconomyScreenProps {
  onClose: () => void
}

const EconomyScreen: React.FC<EconomyScreenProps> = ({ onClose }) => {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      {/* Screen Container */}
      <div className="bg-bgLight dark:bg-deepDark w-full max-w-[960px] max-h-[calc(100vh-100px)] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-borderLight dark:border-borderDark">
        <EconomyHeader onClose={onClose} />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <EconomyChart />

          {/* Tooltip / Legend mock */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark">
              <p className="text-xs text-textSecondary dark:text-textDarkSecondary font-semibold uppercase">
                Active Debt
              </p>
              <p className="text-lg font-bold text-red-500">30.000$</p>
            </div>
          </div>
        </div>

        <EconomyFooter onClose={onClose} />
      </div>
    </div>
  )
}

export default EconomyScreen
