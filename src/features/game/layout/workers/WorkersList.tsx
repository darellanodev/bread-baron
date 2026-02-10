import { Worker } from '../../components/Worker'
import { useGameStore } from '../../../../store/gameStore'
import { useEffect, useRef, useState } from 'react'

interface WorkersListProps {
  onHireHelper: () => void
}

export function WorkersList({ onHireHelper }: WorkersListProps) {
  const { workers, maxWorkers, increaseBakingProgress, isPaused } =
    useGameStore()
  const [workingWorkers, setWorkingWorkers] = useState<Set<string>>(new Set())
  const progressRef = useRef(0)

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      :root {
        --scrollbar-color: #d6d2cb;
      }
      .dark {
        --scrollbar-color: #3a3121;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Game loop for automatic worker production
  useEffect(() => {
    if (workers.length === 0) return

    const interval = setInterval(() => {
      // Don't work when paused
      if (isPaused) return

      // Calculate total productivity (products per second)
      const totalProductivity = workers.reduce(
        (sum, worker) => sum + worker.productivity,
        0,
      )

      // Add progress for this tick (100ms = 0.1s)
      progressRef.current += totalProductivity * 0.1

      // Show working animation on all workers
      const workerIds = new Set(workers.map((w) => w.id))
      setWorkingWorkers(workerIds)

      // Remove working animation after 200ms
      setTimeout(() => {
        setWorkingWorkers(new Set())
      }, 200)

      // Process complete products
      while (progressRef.current >= 1) {
        increaseBakingProgress()
        progressRef.current -= 1
      }
    }, 100)

    return () => clearInterval(interval)
  }, [workers, isPaused, increaseBakingProgress])

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
            isWorking={workingWorkers.has(worker.id)}
          />
        ))}
        <div
          onClick={onHireHelper}
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
