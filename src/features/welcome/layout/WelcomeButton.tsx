export default function WelcomeButton({ onStart }: { onStart?: () => void }) {
  return (
    <div className="flex justify-center">
      <button
        className="group relative bg-primary hover:bg-amber-500 text-white font-display text-2xl md:text-3xl px-12 py-5 rounded-xl shadow-[0_6px_0_#8b4513] hover:shadow-[0_4px_0_#8b4513] active:shadow-none active:translate-y-1 transition-all duration-150 flex items-center gap-4"
        onClick={() => onStart?.()}
      >
        <span>Start Kneading!</span>
        <svg
          className="h-8 w-8 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  )
}
