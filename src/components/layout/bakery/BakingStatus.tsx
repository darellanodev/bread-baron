export function BakingStatus() {
  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      <div className="flex justify-between items-end px-2">
        <span className="text-xl font-extrabold text-[#8b4513] dark:text-[#eca013]">
          Baking Sourdough...
        </span>
        <span className="font-bold">64%</span>
      </div>
      <div className="h-8 w-full bg-[#e6e2db] dark:bg-[#1a150d] rounded-full p-1.5 shadow-inner border-2 border-[#d6d2cb] dark:border-[#3a3121]">
        <div
          className="h-full bg-gradient-to-r from-[#eca013] to-orange-400 rounded-full shadow-[0_0_15px_rgba(236,160,19,0.5)]"
          style={{ width: '64%' }}
        ></div>
      </div>
    </div>
  )
}
