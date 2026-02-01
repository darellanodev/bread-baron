import Button from '../../../../components/ui/Button'

export function MarketPromotion() {
  return (
    <>
      <Button
        fullWidth
        className="bg-primary text-white font-extrabold text-lg rounded-xl shadow-[0_6px_0_#b47b00] active:shadow-none active:translate-y-[6px] transition-all"
      >
        {/* icon passed as plain string so Button wraps it with the proper classes */}
        <span className="hidden">📢</span>
        <>{'📢'} Launch Promotion!</>
      </Button>
      <p className="text-center text-xs font-bold text-textSecondary mt-4">
        Boost demand by 200% for 30s
      </p>
    </>
  )
}
