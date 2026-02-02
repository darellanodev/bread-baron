import { ProgressBar } from '../../../../components/ui/ProgressBar'

export function BakingStatus() {
  return (
    <div className="w-full max-w-md flex flex-col gap-3">
      <div className="flex justify-between items-end px-2">
        <span className="text-xl font-extrabold text-brownDark dark:text-primary">
          Baking Sourdough...
        </span>
        <span className="font-bold">64%</span>
      </div>
      <ProgressBar
        value={64}
        max={100}
        variant="gradient"
        showPercentage={false}
        showFraction={false}
      />
    </div>
  )
}
