import { WorkersButton, WorkersList } from './workers'

export function WorkersPanel() {
  return (
    <footer className="h-1/4 min-h-[180px] bg-white dark:bg-deepDark border-t-4 border-bgLight dark:border-borderDark flex items-center px-8 gap-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
      <WorkersButton />
      <div className="h-3/4 w-px bg-bgLight dark:bg-borderDark"></div>
      <WorkersList />
    </footer>
  )
}
