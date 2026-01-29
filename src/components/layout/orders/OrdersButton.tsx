export function OrdersButton() {
  return (
    <div className="flex py-3">
      <div className="flex h-11 flex-1 items-center justify-center rounded-full bg-bgLight dark:bg-cardDark p-1 shadow-inner">
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 bg-white dark:bg-borderDark shadow-sm text-textLight dark:text-white text-sm font-bold transition-all">
          Manual
        </label>
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-[#897b61] text-sm font-bold transition-all">
          Auto
        </label>
      </div>
    </div>
  )
}
