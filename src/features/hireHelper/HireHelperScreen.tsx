import { ScreenContainer } from '@/components/ui/ScreenContainer'
import {
  HireHelperHeader,
  HelpersList,
  HireHelperFooter,
} from '@/features/hireHelper/layout'

interface HireHelperScreenProps {
  onClose: () => void
}

export function HireHelperScreen({ onClose }: HireHelperScreenProps) {
  return (
    <ScreenContainer maxWidth="max-w-2xl" height="h-[600px]" rounded="3xl">
      <HireHelperHeader onClose={onClose} />
      <HelpersList />
      <HireHelperFooter onClose={onClose} />
    </ScreenContainer>
  )
}
