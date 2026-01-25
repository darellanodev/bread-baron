interface WorkerProps {
  emoji: string
  name: string
  level: number
  productivity: number
  upgradePrice: number
  onUpgrade?: () => void
}

export function Worker({
  emoji,
  name,
  level,
  productivity,
  upgradePrice,
  onUpgrade,
}: WorkerProps) {
  return (
    <div className="flex-none w-64 dough-card bg-[#f4f3f0] dark:bg-[#2a2418] rounded-xl p-3 flex gap-4 items-center">
      <div className="size-14 bg-[#eca013]/20 rounded-full flex items-center justify-center shrink-0 text-3xl">
        {emoji}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm">{name}</h4>
          <span className="bg-[#eca013] text-[#181511] text-[10px] px-2 py-0.5 rounded-full font-black">
            LVL {level}
          </span>
        </div>
        <p className="text-xs text-[#897b61]">+{productivity} breads/sec</p>
        <button
          onClick={onUpgrade}
          className="mt-1 h-7 bg-white dark:bg-[#1a150d] rounded-full text-[10px] font-bold border border-[#eca013]/20 hover:bg-[#eca013]/10 transition-colors"
        >
          Upgrade (${upgradePrice})
        </button>
      </div>
    </div>
  )
}
