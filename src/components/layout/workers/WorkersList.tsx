import { Worker } from '../../Worker'

export function WorkersList() {
  return (
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
  )
}
