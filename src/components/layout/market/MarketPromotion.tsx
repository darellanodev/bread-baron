export function MarketPromotion() {
  return (
    <>
      <button className="w-full h-14 bg-primary text-white font-extrabold text-lg rounded-xl shadow-[0_6px_0_#b47b00] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-2 group">
        <span className="text-2xl group-hover:rotate-12 transition-transform">
          📢
        </span>
        Launch Promotion!
      </button>
      <p className="text-center text-xs font-bold text-textSecondary mt-4">
        Boost demand by 200% for 30s
      </p>
    </>
  )
}
