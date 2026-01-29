import { LevelDisplay, BakeryOven, BakingStatus } from './bakery'

export function BakeryPanel() {
  return (
    <section className="w-1/2 flex flex-col bg-bgCream dark:bg-bgDark p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center text-[30rem]">
        🍪
      </div>
      <div className="z-10 flex flex-col h-full">
        <LevelDisplay />
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <BakeryOven />
          <BakingStatus />
        </div>
      </div>
    </section>
  )
}
