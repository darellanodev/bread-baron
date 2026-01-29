interface StatProps {
  icon: string
  value: string
}

export function Stat({ icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-1.5 bg-bgLight dark:bg-cardDark rounded-full">
      <span className="text-primary text-xl">{icon}</span>
      <span className="text-textLight dark:text-bgLight text-sm font-bold">
        {value}
      </span>
    </div>
  )
}
