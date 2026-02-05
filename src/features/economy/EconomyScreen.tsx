import React from 'react'
import DarkModeToggle from '../../components/ui/DarkModeToggle'
import { EconomyHeader } from './EconomyHeader'
import { EconomyChart } from './EconomyChart'
import { EconomyFooter } from './EconomyFooter'

interface EconomyScreenProps {
  onClose: () => void
}

const EconomyScreen: React.FC<EconomyScreenProps> = ({ onClose }) => {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-screen flex items-center justify-center p-4">
      <DarkModeToggle />
      {/* Mock Background Content (Simulating a game screen behind the modal) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="grid grid-cols-6 gap-4 p-8">
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="h-40 bg-gray-700 rounded-lg"></div>
          <div className="col-span-2 h-64 bg-gray-700 rounded-lg"></div>
          <div className="col-span-4 h-64 bg-gray-700 rounded-lg"></div>
        </div>
      </div>

      {/* Modal Backdrop Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-10 flex items-center justify-center p-6 md:p-12 bg-black/70 backdrop-blur-sm"
      >
        {/* Modal Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-bgLight dark:bg-deepDark w-full max-w-[960px] max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-borderLight dark:border-borderDark"
        >
          <EconomyHeader onClose={onClose} />

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
            {/* PageHeading Style Section */}
            <div className="flex flex-wrap justify-between gap-4 mb-8">
              <div className="flex min-w-72 flex-col gap-1">
                <p className="text-textLight dark:text-textDark text-4xl font-black leading-tight tracking-[-0.033em]">
                  Overview
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-textSecondary dark:text-textDarkSecondary text-lg font-normal">
                    Current Balance:
                  </span>
                  <span className="text-primary text-xl font-bold tracking-tight">
                    $45,200
                  </span>
                </div>
              </div>
              <div className="flex items-end">
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 flex flex-col items-end">
                  <span className="text-xs uppercase font-bold text-primary/70">
                    Estimated Growth
                  </span>
                  <span className="text-primary font-bold">
                    +12.5%{' '}
                    <span className="text-xs font-normal opacity-70">
                      this month
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <EconomyChart />

            {/* Tooltip / Legend mock */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark">
                <p className="text-xs text-textSecondary dark:text-textDarkSecondary font-semibold uppercase">
                  Total Assets
                </p>
                <p className="text-lg font-bold text-textLight dark:text-textDark">
                  $158,400
                </p>
              </div>
              <div className="p-4 rounded-lg bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark">
                <p className="text-xs text-textSecondary dark:text-textDarkSecondary font-semibold uppercase">
                  Active Debt
                </p>
                <p className="text-lg font-bold text-red-500">$12,000</p>
              </div>
            </div>
          </div>

          <EconomyFooter onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

export default EconomyScreen
