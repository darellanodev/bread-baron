import { WindowContainer, WindowHeader } from '@/components/window'
import { HelpersList, HireHelperFooter } from '@/features/hireHelper/layout'

interface HireHelperScreenProps {
  onClose: () => void
}

export function HireHelperScreen({ onClose }: HireHelperScreenProps) {
  return (
    <WindowContainer maxWidth="max-w-2xl" height="h-[600px]" rounded="3xl">
      <WindowHeader title="Hire a New Helper" onClose={onClose} />
      <HelpersList />
      <HireHelperFooter onClose={onClose} />
    </WindowContainer>
  )
}
