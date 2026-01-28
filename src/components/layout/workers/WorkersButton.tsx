export function WorkersButton() {
  return (
    <div className="flex-none">
      <button className="size-32 rounded-full bg-[#eca013] border-8 border-white dark:border-[#2a2418] shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-105 active:scale-90 active:shadow-inner group cursor-pointer">
        <span className="text-4xl mb-1 group-active:animate-bounce">👆</span>
        <span className="font-black text-lg uppercase tracking-tighter">
          KNEAD NOW!
        </span>
      </button>
    </div>
  )
}
