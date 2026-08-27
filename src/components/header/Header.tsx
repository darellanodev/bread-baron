import { HeaderTitle } from './HeaderTitle'
import { HeaderStats } from './HeaderStats'
import { HeaderActions } from './HeaderActions'

interface HeaderProps {
  onEconomy: () => void
}

export function Header({ onEconomy }: HeaderProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-bgLight dark:border-b-borderDark bg-white dark:bg-deepDark lg:px-10 px-4 py-3 z-50">
      <HeaderTitle />
      <div className="flex flex-1 justify-end gap-8">
        <HeaderStats onEconomy={onEconomy} />
        <HeaderActions />
      </div>
    </header>
  )
}
