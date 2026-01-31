interface StatProps {
  icon?: string
  label?: string
  value: string | number
}

export function Stat({ icon, label, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-1.5 bg-bgLight dark:bg-cardDark rounded-full">
      {icon ? (
        <span className="text-primary text-xl">{icon}</span>
      ) : (
        <span className="text-xs text-textSecondary">{label}</span>
      )}
      <span className="text-textLight dark:text-bgLight text-sm font-bold">
        {value}
      </span>
    </div>
  )
}
