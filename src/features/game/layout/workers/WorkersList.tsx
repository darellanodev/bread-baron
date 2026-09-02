import { Worker } from '@/features/game/components/Worker'
import { useGameStore } from '@/store/gameStore'

interface WorkersListProps {
  onHireHelper: () => void
}

export function WorkersList({ onHireHelper }: WorkersListProps) {
  const {
    workers,
    maxWorkers,
    upgradeWorker,
  } = useGameStore()

  return (
    <div className="flex-1 flex flex-col h-full py-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-extrabold text-xl flex items-center gap-2 uppercase tracking-wide">
          <span className="text-primary text-2xl">👥</span>
          Production Staff
        </h3>
        <span className="text-sm font-bold text-textSecondary">
          Hired: {workers.length}/{maxWorkers}
        </span>
      </div>
      <div
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--scrollbar-color) transparent',
        }}
      >
        {workers.map((worker) => (
          <Worker
            key={worker.id}
            emoji={worker.emoji}
            name={worker.name}
            level={worker.level}
            productivity={worker.productivity}
            upgradePrice={worker.upgradePrice}
            daysRemaining={worker.daysRemaining}
            onUpgrade={() => upgradeWorker(worker.id)}
          />
        ))}
        <div
          onClick={onHireHelper}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onHireHelper() }}
          tabIndex={0}
          role="button"
          className="flex-none w-48 border-4 border-dashed border-borderLight dark:border-borderDark rounded-xl flex flex-col items-center justify-center p-4 hover:border-primary transition-colors cursor-pointer group"
        >
          <span className="text-3xl text-textSecondary group-hover:text-primary mb-2">
            ➕
          </span>
          <p className="text-xs font-bold text-textSecondary group-hover:text-primary">
            Hire Helper
          </p>
        </div>
      </div>
    </div>
  )
}
