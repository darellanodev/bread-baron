export function HeaderActions() {
  return (
    <div className="flex gap-2">
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eca013] text-[#181511] text-sm font-bold transition-all active:scale-95 shadow-md">
        Save Game
      </button>
      <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f4f3f0] dark:bg-[#2a2418] text-[#181511] dark:text-[#f4f3f0] transition-all hover:bg-[#eca013]/20 text-xl">
        ⚙️
      </button>
    </div>
  )
}
