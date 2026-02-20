import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { WindowHeader } from '@/components/ui/WindowHeader'
import { HelpersList, HireHelperFooter } from '@/features/hireHelper/layout'

interface HireHelperScreenProps {
  onClose: () => void
}

export function HireHelperScreen({ onClose }: HireHelperScreenProps) {
  return (
    <ScreenContainer maxWidth="max-w-2xl" height="h-[600px]" rounded="3xl">
      <WindowHeader title="Hire a New Helper" onClose={onClose} />
      <HelpersList />
      <HireHelperFooter onClose={onClose} />
    </ScreenContainer>
  )
}
