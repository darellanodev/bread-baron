import { Worker } from '../Worker'

export function WorkersPanel() {
  return (
    <footer className="h-1/4 min-h-[180px] bg-white dark:bg-[#1a150d] border-t-4 border-[#f4f3f0] dark:border-[#3a3121] flex items-center px-8 gap-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
      <div className="flex-none">
        <button className="size-32 rounded-full bg-[#eca013] border-8 border-white dark:border-[#2a2418] shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-105 active:scale-90 active:shadow-inner group cursor-pointer">
          <span className="text-4xl mb-1 group-active:animate-bounce">👆</span>
          <span className="font-black text-lg uppercase tracking-tighter">
            KNEAD NOW!
          </span>
        </button>
      </div>
      <div className="h-3/4 w-px bg-[#f4f3f0] dark:bg-[#3a3121]"></div>
      <div className="flex-1 flex flex-col h-full py-4 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-extrabold text-xl flex items-center gap-2 uppercase tracking-wide">
            <span className="text-[#eca013] text-2xl">👥</span>
            Production Staff
          </h3>
          <span className="text-sm font-bold text-[#897b61]">Hired: 4/12</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
          <Worker
            emoji="👩"
            name="Apprentice Sue"
            level={3}
            productivity={1.2}
            upgradePrice={150}
          />
          <Worker
            emoji="👨"
            name="Kneader Dan"
            level={1}
            productivity={2.5}
            upgradePrice={400}
          />
          <div className="flex-none w-48 border-4 border-dashed border-[#d6d2cb] dark:border-[#3a3121] rounded-xl flex flex-col items-center justify-center p-4 hover:border-[#eca013] transition-colors cursor-pointer group">
            <span className="text-3xl text-[#897b61] group-hover:text-[#eca013] mb-2">
              ➕
            </span>
            <p className="text-xs font-bold text-[#897b61] group-hover:text-[#eca013]">
              Hire Helper
            </p>
            <p className="text-sm font-black text-green-500">$500</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
