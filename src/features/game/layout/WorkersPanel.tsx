import { WorkersButton, WorkersList } from '@/features/game/layout/workers'

interface WorkersPanelProps {
  onHireHelper: () => void
}

export function WorkersPanel({ onHireHelper }: WorkersPanelProps) {
  return (
    <footer className="h-full bg-white dark:bg-deepDark border-t-4 border-bgLight dark:border-borderDark flex items-center px-8 gap-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
      <WorkersButton />
      <div className="h-3/4 w-px bg-bgLight dark:bg-borderDark"></div>
      <div className="flex-1 overflow-hidden">
        <WorkersList onHireHelper={onHireHelper} />
      </div>
    </footer>
  )
}
