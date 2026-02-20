import { WindowContainer, WindowHeader } from '@/components/window'
import { IndustryMap, IndustryFooter } from '@/features/industry/layout'

interface IndustryScreenProps {
  onClose: () => void
}

export function IndustryScreen({ onClose }: IndustryScreenProps) {
  return (
    <WindowContainer>
      <WindowHeader title="Industry" onClose={onClose} />

      <main className="flex-1 overflow-y-auto p-12">
        <IndustryMap />
      </main>

      <IndustryFooter onClose={onClose} />
    </WindowContainer>
  )
}
