export function BakingStatus() {
  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      <div className="flex justify-between items-end px-2">
        <span className="text-xl font-extrabold text-brownDark dark:text-primary">
          Baking Sourdough...
        </span>
        <span className="font-bold">64%</span>
      </div>
      <div className="h-8 w-full bg-inputLight dark:bg-deepDark rounded-full p-1.5 shadow-inner border-2 border-borderLight dark:border-borderDark">
        <div
          className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full shadow-[0_0_15px_rgba(236,160,19,0.5)]"
          style={{ width: '64%' }}
        ></div>
      </div>
    </div>
  )
}
