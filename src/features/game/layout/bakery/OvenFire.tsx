interface OvenFireProps {
  compact?: boolean
}

export function OvenFire({ compact = false }: OvenFireProps) {
  return (
    <div className={`${compact ? 'w-full h-full' : 'w-48 h-36'} bg-brownDeep rounded-lg border-4 border-primary/30 flex items-center justify-center overflow-hidden`}>
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(236,160,19,0.2)_0%,rgba(0,0,0,1)_100%)] flex items-center justify-center">
        <span className={`${compact ? 'text-3xl' : 'text-7xl'} text-primary animate-pulse`}>🔥</span>
      </div>
    </div>
  )
}
