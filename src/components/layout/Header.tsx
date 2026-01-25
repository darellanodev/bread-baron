import { Stat } from '../Stat'

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f3f0] dark:border-b-[#3a3121] bg-white dark:bg-[#1a150d] px-10 py-3 z-50">
      <div className="flex items-center gap-4 text-[#eca013]">
        <div className="size-8 flex items-center justify-center bg-[#eca013]/10 rounded-lg text-2xl">
          🍞
        </div>
        <h2 className="text-[#181511] dark:text-[#f4f3f0] text-xl font-extrabold leading-tight tracking-[-0.015em]">
          Bread Baron
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-6">
          <Stat icon="💰" value="$12,450" />
          <Stat icon="⚡" value="14.5 P/s" />
          <Stat icon="🥖" value="1.2M Baked" />
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eca013] text-[#181511] text-sm font-bold transition-all active:scale-95 shadow-md">
            Save Game
          </button>
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f4f3f0] dark:bg-[#2a2418] text-[#181511] dark:text-[#f4f3f0] transition-all hover:bg-[#eca013]/20 text-xl">
            ⚙️
          </button>
        </div>
      </div>
    </header>
  )
}
