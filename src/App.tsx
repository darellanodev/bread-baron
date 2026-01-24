import React from 'react'

function App() {
  return (
    <div className="bg-[#f8f7f6] dark:bg-[#221c10] text-[#181511] dark:text-[#f4f3f0] h-screen overflow-hidden flex flex-col font-sans">
      <style>{`
        body { font-family: 'Be Vietnam Pro', sans-serif; margin: 0; }
        .dough-card { border: 4px solid #f4f3f0; box-shadow: 0 4px 0px rgba(0,0,0,0.05); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #eca01344; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #eca013; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      {/* HEADER */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f3f0] dark:border-b-[#3a3121] bg-white dark:bg-[#1a150d] px-10 py-3 z-50">
        <div className="flex items-center gap-4 text-[#eca013]">
          <div className="size-8 flex items-center justify-center bg-[#eca013]/10 rounded-lg text-2xl">
            🍞
          </div>
          <h2 className="text-[#181511] dark:text-[#f4f3f0] text-xl font-extrabold leading-tight tracking-[-0.015em]">
            Task Eater Manager
          </h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#f4f3f0] dark:bg-[#2a2418] rounded-full">
              <span className="text-[#eca013] text-xl">💰</span>
              <span className="text-[#181511] dark:text-[#f4f3f0] text-sm font-bold">
                $12,450
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#f4f3f0] dark:bg-[#2a2418] rounded-full">
              <span className="text-[#eca013] text-xl">⚡</span>
              <span className="text-[#181511] dark:text-[#f4f3f0] text-sm font-bold">
                14.5 P/s
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#f4f3f0] dark:bg-[#2a2418] rounded-full">
              <span className="text-[#eca013] text-xl">🥖</span>
              <span className="text-[#181511] dark:text-[#f4f3f0] text-sm font-bold">
                1.2M Baked
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eca013] text-[#181511] text-sm font-bold transition-all active:scale-95 shadow-md">
              Save Game
            </button>
            <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f4f3f0] dark:bg-[#2a2418] text-[#181511] dark:text-[#f4f3f0] transition-all hover:bg-[#eca013]/20 text-xl">
              ⚙️
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* LEFT PANEL - ORDERS */}
        <aside className="w-1/4 flex flex-col border-r border-[#f4f3f0] dark:border-[#3a3121] bg-white dark:bg-[#1a150d] h-full overflow-hidden">
          <div className="p-6 pb-2">
            <h2 className="text-2xl font-extrabold flex items-center gap-2">
              <span className="text-[#eca013] text-2xl">📋</span>
              Active Orders
            </h2>
            <div className="flex py-3">
              <div className="flex h-11 flex-1 items-center justify-center rounded-full bg-[#f4f3f0] dark:bg-[#2a2418] p-1 shadow-inner">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 bg-white dark:bg-[#3a3121] shadow-sm text-[#181511] dark:text-white text-sm font-bold transition-all">
                  Manual
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-[#897b61] text-sm font-bold transition-all">
                  Auto
                </label>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-4">
            {/* Order Card 1 */}
            <div className="dough-card rounded-xl bg-white dark:bg-[#2a2418] p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#eca013] text-xs font-bold uppercase tracking-widest">
                    Difficulty: Medium
                  </p>
                  <h3 className="text-lg font-bold leading-tight">
                    Rustic Bread Batch
                  </h3>
                </div>
                <span className="text-green-500 font-bold">$150</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span>7/10</span>
                </div>
                <div className="h-3 rounded-full bg-[#e6e2db] dark:bg-[#1a150d] overflow-hidden">
                  <div
                    className="h-full bg-[#eca013]"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 w-full rounded-full h-9 bg-[#eca013]/10 text-[#eca013] font-bold text-sm hover:bg-[#eca013] hover:text-white transition-all">
                ⭐ Prioritize
              </button>
            </div>

            {/* Order Card 2 */}
            <div className="dough-card rounded-xl bg-white dark:bg-[#2a2418] p-4 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">
                    Difficulty: Hard
                  </p>
                  <h3 className="text-lg font-bold leading-tight">
                    Gourmet Croissants
                  </h3>
                </div>
                <span className="text-green-500 font-bold">$500</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span>Progress</span>
                  <span>2/25</span>
                </div>
                <div className="h-3 rounded-full bg-[#e6e2db] dark:bg-[#1a150d] overflow-hidden">
                  <div
                    className="h-full bg-[#eca013]"
                    style={{ width: '8%' }}
                  ></div>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 w-full rounded-full h-9 bg-[#eca013]/10 text-[#eca013] font-bold text-sm hover:bg-[#eca013] hover:text-white transition-all">
                ⭐ Prioritize
              </button>
            </div>

            {/* Order Card 3 - Inactive */}
            <div className="dough-card rounded-xl bg-white dark:bg-[#2a2418] p-4 flex flex-col gap-3 opacity-60">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-green-500 text-xs font-bold uppercase tracking-widest">
                    Difficulty: Easy
                  </p>
                  <h3 className="text-lg font-bold leading-tight">
                    Daily Baguettes
                  </h3>
                </div>
                <span className="text-green-500 font-bold">$40</span>
              </div>
              <button className="w-full rounded-full h-9 bg-[#f4f3f0] dark:bg-[#1a150d] text-[#897b61] font-bold text-sm cursor-not-allowed">
                Waiting for Dough...
              </button>
            </div>
          </div>
        </aside>

        {/* CENTER - BAKERY SCENE */}
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

        {/* RIGHT PANEL - MARKET */}
        <aside className="w-1/4 flex flex-col border-l border-[#f4f3f0] dark:border-[#3a3121] bg-white dark:bg-[#1a150d] h-full overflow-hidden">
          <div className="p-6 pb-2">
            <h2 className="text-2xl font-extrabold flex items-center gap-2">
              <span className="text-[#eca013] text-2xl">🏪</span>
              The Market
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex justify-between text-sm font-bold">
                <span>Demand Level</span>
                <span className="text-[#eca013]">HIGH</span>
              </div>
              <div className="h-2 w-full bg-[#f4f3f0] dark:bg-[#2a2418] rounded-full flex gap-1">
                <div className="h-full flex-1 bg-[#eca013] rounded-full"></div>
                <div className="h-full flex-1 bg-[#eca013] rounded-full"></div>
                <div className="h-full flex-1 bg-[#eca013] rounded-full"></div>
                <div className="h-full flex-1 bg-gray-200 dark:bg-[#1a150d] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="mb-6">
              <p className="text-xs font-bold text-[#897b61] uppercase tracking-widest mb-3">
                Customers in Queue (12)
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 bg-[#f4f3f0]/50 dark:bg-[#2a2418]/50 rounded-xl border border-dashed border-[#d6d2cb] dark:border-[#3a3121]">
                  <div className="size-10 rounded-full bg-[#eca013]/20 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">The Mayor</p>
                    <p className="text-xs text-[#897b61]">
                      Wants: 5x Rustic Bread
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f4f3f0]/50 dark:bg-[#2a2418]/50 rounded-xl border border-dashed border-[#d6d2cb] dark:border-[#3a3121]">
                  <div className="size-10 rounded-full bg-[#eca013]/20 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Construction Worker</p>
                    <p className="text-xs text-[#897b61]">
                      Wants: 2x Croissants
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f4f3f0]/50 dark:bg-[#2a2418]/50 rounded-xl border border-dashed border-[#d6d2cb] dark:border-[#3a3121]">
                  <div className="size-10 rounded-full bg-[#eca013]/20 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Village Baker</p>
                    <p className="text-xs text-[#897b61]">
                      Wants: 10x Dough Bags
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-[#f4f3f0] dark:border-[#3a3121]">
            <button className="w-full h-14 bg-[#eca013] text-white font-extrabold text-lg rounded-xl shadow-[0_6px_0_#b47b00] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-2 group">
              <span className="text-2xl group-hover:rotate-12 transition-transform">
                📢
              </span>
              Launch Promotion!
            </button>
            <p className="text-center text-xs font-bold text-[#897b61] mt-4">
              Boost demand by 200% for 30s
            </p>
          </div>
        </aside>
      </main>

      {/* BOTTOM BAR - WORKERS */}
      <footer className="h-1/4 min-h-[180px] bg-white dark:bg-[#1a150d] border-t-4 border-[#f4f3f0] dark:border-[#3a3121] flex items-center px-8 gap-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <div className="flex-none">
          <button className="size-32 rounded-full bg-[#eca013] border-8 border-white dark:border-[#2a2418] shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-105 active:scale-90 active:shadow-inner group cursor-pointer">
            <span className="text-4xl mb-1 group-active:animate-bounce">
              👆
            </span>
            <span className="font-black text-lg uppercase tracking-tighter">
              KNEAD NOW!
            </span>
          </button>
        </div>
        <div className="h-3/4 w-px bg-[#f4f3f0] dark:bg-[#3a3121]"></div>
        <div className="flex-1 flex flex-col h-full py-4 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-extrabold text-xl flex items-center gap-2 uppercase tracking-wide">
              <span className="text-[#eca013] text-2xl">👥</span>
              Production Staff
            </h3>
            <span className="text-sm font-bold text-[#897b61]">
              Hired: 4/12
            </span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
            <div className="flex-none w-64 dough-card bg-[#f4f3f0] dark:bg-[#2a2418] rounded-xl p-3 flex gap-4 items-center">
              <div className="size-14 bg-[#eca013]/20 rounded-full flex items-center justify-center shrink-0 text-3xl">
                👩
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm">Apprentice Sue</h4>
                  <span className="bg-[#eca013] text-[#181511] text-[10px] px-2 py-0.5 rounded-full font-black">
                    LVL 3
                  </span>
                </div>
                <p className="text-xs text-[#897b61]">+1.2 breads/sec</p>
                <button className="mt-1 h-7 bg-white dark:bg-[#1a150d] rounded-full text-[10px] font-bold border border-[#eca013]/20 hover:bg-[#eca013]/10 transition-colors">
                  Upgrade ($150)
                </button>
              </div>
            </div>
            <div className="flex-none w-64 dough-card bg-[#f4f3f0] dark:bg-[#2a2418] rounded-xl p-3 flex gap-4 items-center">
              <div className="size-14 bg-[#eca013]/20 rounded-full flex items-center justify-center shrink-0 text-3xl">
                👨
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm">Kneader Dan</h4>
                  <span className="bg-[#eca013] text-[#181511] text-[10px] px-2 py-0.5 rounded-full font-black">
                    LVL 1
                  </span>
                </div>
                <p className="text-xs text-[#897b61]">+2.5 breads/sec</p>
                <button className="mt-1 h-7 bg-white dark:bg-[#1a150d] rounded-full text-[10px] font-bold border border-[#eca013]/20 hover:bg-[#eca013]/10 transition-colors">
                  Upgrade ($400)
                </button>
              </div>
            </div>
            <div className="flex-none w-48 border-4 border-dashed border-[#d6d2cb] dark:border-[#3a3121] rounded-xl flex flex-col items-center justify-center p-4 hover:border-[#eca013] transition-colors cursor-pointer group">
              <span className="text-3xl text-[#897b61] group-hover:text-[#eca013] mb-2">
                ➕
              </span>
              <p className="text-xs font-bold text-[#897b61] group-hover:text-[#eca013]">
                Hire Helper
              </p>
              <p className="text-sm font-black text-green-500">$500</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
