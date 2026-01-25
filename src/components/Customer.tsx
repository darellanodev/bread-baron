interface CustomerProps {
  name: string
  wants: string
}

export function Customer({ name, wants }: CustomerProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-[#f4f3f0]/50 dark:bg-[#2a2418]/50 rounded-xl border border-dashed border-[#d6d2cb] dark:border-[#3a3121]">
      <div className="size-10 rounded-full bg-[#eca013]/20 flex items-center justify-center text-2xl">
        👤
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-[#897b61]">Wants: {wants}</p>
      </div>
    </div>
  )
}
