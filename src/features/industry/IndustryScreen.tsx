import { ScreenContainer } from '@/components/ui/ScreenContainer'
import {
  IndustryHeader,
  IndustryMap,
  IndustryFooter,
} from '@/features/industry/layout'

interface IndustryScreenProps {
  onClose: () => void
}

export function IndustryScreen({ onClose }: IndustryScreenProps) {
  return (
    <ScreenContainer>
      <IndustryHeader onClose={onClose} />

      <main className="flex-1 overflow-y-auto p-12">
        <IndustryMap />
      </main>

      <IndustryFooter onClose={onClose} />
    </ScreenContainer>
  )
}
