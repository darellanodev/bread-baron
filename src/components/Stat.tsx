interface StatProps {
  icon: string
  value: string
}

export function Stat({ icon, value }: StatProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#f4f3f0] dark:bg-[#2a2418] rounded-full">
      <span className="text-[#eca013] text-xl">{icon}</span>
      <span className="text-[#181511] dark:text-[#f4f3f0] text-sm font-bold">
        {value}
      </span>
    </div>
  )
}
