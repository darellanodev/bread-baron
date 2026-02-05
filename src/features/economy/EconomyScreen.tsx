import React from 'react'

interface EconomyScreenProps {
  onClose: () => void
}

const EconomyScreen: React.FC<EconomyScreenProps> = ({ onClose }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
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
        className="fixed inset-0 z-10 flex items-center justify-center p-6 md:p-12"
        style={{
          backgroundColor: 'rgba(16, 34, 22, 0.85)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Modal Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-[#162d1e] w-full max-w-[960px] max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-[#22492f]"
        >
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-5 border-b border-solid border-gray-200 dark:border-[#22492f]">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
              </div>
              <h2 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">
                Economy
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-full size-10 bg-gray-100 dark:bg-[#22492f] text-gray-600 dark:text-white hover:bg-red-500/20 hover:text-red-500 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
            {/* PageHeading Style Section */}
            <div className="flex flex-wrap justify-between gap-4 mb-8">
              <div className="flex min-w-72 flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Overview
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 dark:text-[#90cba4] text-lg font-normal">
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

            {/* Charts Section */}
            <div className="bg-gray-50 dark:bg-[#102316] border border-gray-200 dark:border-[#22492f] rounded-xl p-6">
              <div className="flex flex-col gap-2 mb-6">
                <p className="text-gray-700 dark:text-white text-base font-medium leading-normal">
                  Wealth vs. Time
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight truncate">
                    $45,200
                  </p>
                  <p className="text-primary text-sm font-semibold">
                    + $5,650 (30d)
                  </p>
                </div>
              </div>

              {/* Visualization */}
              <div className="w-full h-[280px] relative">
                <svg
                  fill="none"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="-3 0 478 150"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Gradient Area Fill */}
                  <path
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                    fill="url(#paint0_linear)"
                  />
                  {/* Main Line */}
                  <path
                    style={{
                      filter: 'drop-shadow(0px 0px 8px rgba(13, 242, 89, 0.4))',
                    }}
                    d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                    stroke="#0df259"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear"
                      x1="236"
                      x2="236"
                      y1="1"
                      y2="149"
                    >
                      <stop stopColor="#0df259" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#0df259" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* X-Axis Labels */}
                <div className="flex justify-around mt-4 border-t border-gray-200 dark:border-[#22492f] pt-4">
                  <p className="text-gray-500 dark:text-[#90cba4] text-[11px] font-bold uppercase tracking-wider">
                    Day 1
                  </p>
                  <p className="text-gray-500 dark:text-[#90cba4] text-[11px] font-bold uppercase tracking-wider">
                    Day 10
                  </p>
                  <p className="text-gray-500 dark:text-[#90cba4] text-[11px] font-bold uppercase tracking-wider">
                    Day 20
                  </p>
                  <p className="text-gray-500 dark:text-[#90cba4] text-[11px] font-bold uppercase tracking-wider">
                    Day 30
                  </p>
                </div>
              </div>
            </div>

            {/* Tooltip / Legend mock */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-[#1a3524] border border-gray-100 dark:border-[#22492f]">
                <p className="text-xs text-gray-500 dark:text-[#90cba4] font-semibold uppercase">
                  Total Assets
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  $158,400
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-[#1a3524] border border-gray-100 dark:border-[#22492f]">
                <p className="text-xs text-gray-500 dark:text-[#90cba4] font-semibold uppercase">
                  Active Debt
                </p>
                <p className="text-lg font-bold text-red-500">$12,000</p>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <footer className="p-6 border-t border-solid border-gray-200 dark:border-[#22492f] bg-gray-50 dark:bg-[#0d1c12]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Actions */}
              <div className="flex flex-1 gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-background-dark text-base font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-[0_4px_14px_0_rgba(13,242,89,0.39)]">
                  <span className="truncate">Request Loan</span>
                </button>
                <button className="flex-1 md:flex-none min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-transparent border-2 border-[#22492f] text-gray-900 dark:text-white text-base font-bold transition-all hover:bg-white/5">
                  <span className="truncate">Pay Loan</span>
                </button>
              </div>
              {/* Close */}
              <button
                onClick={onClose}
                className="w-full md:w-auto min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-transparent text-gray-500 dark:text-gray-400 text-sm font-bold hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <span className="truncate">Close</span>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default EconomyScreen
