import { WorkersButton, WorkersList } from './workers'

export function WorkersPanel() {
  return (
    <footer className="h-1/4 min-h-[180px] bg-white dark:bg-[#1a150d] border-t-4 border-[#f4f3f0] dark:border-[#3a3121] flex items-center px-8 gap-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
      <WorkersButton />
      <div className="h-3/4 w-px bg-[#f4f3f0] dark:bg-[#3a3121]"></div>
      <WorkersList />
    </footer>
  )
}
