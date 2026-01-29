export function BakeryOven() {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-[#eca013]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-72 h-72 bg-gradient-to-br from-[#8b4513] to-[#5e2f0d] rounded-xl border-8 border-[#3a1d08] shadow-2xl flex items-center justify-center relative">
        <div className="w-56 h-40 bg-[#1a0f05] rounded-lg border-4 border-[#eca013]/30 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(236,160,19,0.2)_0%,rgba(0,0,0,1)_100%)] flex items-center justify-center">
            <span className="text-7xl text-[#eca013] animate-pulse">🔥</span>
          </div>
        </div>
        <div className="absolute top-1/2 -right-4 w-4 h-24 bg-gray-400 rounded-full border-2 border-gray-600"></div>
      </div>
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[#eca013] text-4xl transform -translate-y-4">
          🥖
        </span>
        <span className="text-[#eca013] font-bold">+1 Bread</span>
      </div>
    </div>
  )
}
