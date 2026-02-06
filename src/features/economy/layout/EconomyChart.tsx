export function EconomyChart() {
  return (
    <div className="bg-bgSecondary dark:bg-cardDark border border-borderLight dark:border-borderDark rounded-xl p-6">
      <div className="flex flex-col gap-2 mb-6">
        <p className="text-textLight dark:text-textDark text-base font-medium leading-normal">
          Wealth vs. Time
        </p>
        <div className="flex items-baseline gap-2">
          <p className="text-textLight dark:text-textDark tracking-tight text-[32px] font-bold leading-tight truncate">
            $45,200
          </p>
          <p className="text-primary text-sm font-semibold">+ $5,650 (30d)</p>
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
        <div className="flex justify-around mt-4 border-t border-borderLight dark:border-borderDark pt-4">
          <p className="text-textSecondary dark:text-textDarkSecondary text-[11px] font-bold uppercase tracking-wider">
            Day 1
          </p>
          <p className="text-textSecondary dark:text-textDarkSecondary text-[11px] font-bold uppercase tracking-wider">
            Day 10
          </p>
          <p className="text-textSecondary dark:text-textDarkSecondary text-[11px] font-bold uppercase tracking-wider">
            Day 20
          </p>
          <p className="text-textSecondary dark:text-textDarkSecondary text-[11px] font-bold uppercase tracking-wider">
            Day 30
          </p>
        </div>
      </div>
    </div>
  )
}
