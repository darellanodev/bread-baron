import { IndustryHeader, IndustryMap, IndustryFooter } from './layout'

interface IndustryScreenProps {
  onClose: () => void
}

export function IndustryScreen({ onClose }: IndustryScreenProps) {
  return (
    <div className="bg-bgSecondary dark:bg-bgDark min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="bg-bgLight dark:bg-deepDark w-full max-w-4xl max-h-[calc(100vh-100px)] overflow-hidden rounded-xl shadow-2xl flex flex-col border border-borderLight dark:border-borderDark">
        <IndustryHeader onClose={onClose} />

        <main className="flex-1 overflow-y-auto p-12">
          <IndustryMap />
        </main>

        <IndustryFooter onClose={onClose} />
      </div>
    </div>
  )
}
