export function OrdersButton() {
  return (
    <div className="flex py-3">
      <div className="flex h-11 flex-1 items-center justify-center rounded-full bg-[#f4f3f0] dark:bg-[#2a2418] p-1 shadow-inner">
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 bg-white dark:bg-[#3a3121] shadow-sm text-[#181511] dark:text-white text-sm font-bold transition-all">
          Manual
        </label>
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-[#897b61] text-sm font-bold transition-all">
          Auto
        </label>
      </div>
    </div>
  )
}
