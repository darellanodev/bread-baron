export function BakeryPanel() {
  return (
    <section className="w-1/2 flex flex-col bg-[#fdf5e6] dark:bg-[#221c10] p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center text-[30rem]">
        🍪
      </div>
      <div className="z-10 flex flex-col h-full">
        <div className="flex justify-center mb-6">
          <div className="bg-[#8b4513] text-white px-6 py-2 rounded-full font-bold shadow-lg border-2 border-[#eca013] flex items-center gap-2">
            🏠 LEVEL 1: NEIGHBORHOOD OVEN
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#eca013]/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-72 h-72 bg-gradient-to-br from-[#8b4513] to-[#5e2f0d] rounded-xl border-8 border-[#3a1d08] shadow-2xl flex items-center justify-center relative">
              <div className="w-56 h-40 bg-[#1a0f05] rounded-lg border-4 border-[#eca013]/30 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(236,160,19,0.2)_0%,rgba(0,0,0,1)_100%)] flex items-center justify-center">
                  <span className="text-7xl text-[#eca013] animate-pulse">
                    🔥
                  </span>
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
          <div className="w-full max-w-md flex flex-col gap-3">
            <div className="flex justify-between items-end px-2">
              <span className="text-xl font-extrabold text-[#8b4513] dark:text-[#eca013]">
                Baking Sourdough...
              </span>
              <span className="font-bold">64%</span>
            </div>
            <div className="h-8 w-full bg-[#e6e2db] dark:bg-[#1a150d] rounded-full p-1.5 shadow-inner border-2 border-[#d6d2cb] dark:border-[#3a3121]">
              <div
                className="h-full bg-gradient-to-r from-[#eca013] to-orange-400 rounded-full shadow-[0_0_15px_rgba(236,160,19,0.5)]"
                style={{ width: '64%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
