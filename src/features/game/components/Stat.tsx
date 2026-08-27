interface StatProps {
  icon?: string
  label?: string
  value: string | number
}

export function Stat({ icon, label, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 lg:px-4 lg:py-1.5 px-2 py-1 bg-bgLight dark:bg-cardDark rounded-full">
      {icon ? (
        <span className="text-primary text-xl">{icon}</span>
      ) : (
        <span className="text-xs text-textSecondary">{label}</span>
      )}
      <span className="text-textLight dark:text-bgLight text-xs md:text-sm font-bold">
        {value}
      </span>
    </div>
  )
}
