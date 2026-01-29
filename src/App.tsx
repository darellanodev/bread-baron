import { Header } from './components/layout/Header'
import { OrdersPanel } from './components/layout/OrdersPanel'
import { BakeryPanel } from './components/layout/BakeryPanel'
import { MarketPanel } from './components/layout/MarketPanel'
import { WorkersPanel } from './components/layout/WorkersPanel'

function App() {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark text-textLight dark:text-bgLight h-screen overflow-hidden flex flex-col font-sans">
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

      <Header />

      <main className="flex flex-1 overflow-hidden">
        <OrdersPanel />
        <BakeryPanel />
        <MarketPanel />
      </main>

      <WorkersPanel />
    </div>
  )
}

export default App
