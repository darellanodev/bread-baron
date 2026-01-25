import { Worker } from './components/Worker'
import { Customer } from './components/Customer'
import { Header } from './components/layout/Header'
import { OrdersPanel } from './components/layout/OrdersPanel'
import { BakeryScene } from './components/layout/BakeryScene'

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
      <Header />

      <main className="flex flex-1 overflow-hidden">
        {/* LEFT PANEL - ORDERS */}
        <OrdersPanel />

        {/* CENTER - BAKERY SCENE */}
        <BakeryScene />

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
                <Customer name="The Mayor" wants="5x Rustic Bread" />
                <Customer name="Construction Worker" wants="2x Croissants" />
                <Customer name="Village Baker" wants="10x Dough Bags" />
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
            <Worker
              emoji="👩"
              name="Apprentice Sue"
              level={3}
              productivity={1.2}
              upgradePrice={150}
            />
            <Worker
              emoji="👨"
              name="Kneader Dan"
              level={1}
              productivity={2.5}
              upgradePrice={400}
            />
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
