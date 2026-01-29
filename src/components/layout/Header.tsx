import { HeaderTitle, HeaderStats, HeaderActions } from './header/index'

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-bgLight dark:border-b-borderDark bg-white dark:bg-deepDark px-10 py-3 z-50">
      <HeaderTitle />
      <div className="flex flex-1 justify-end gap-8">
        <HeaderStats />
        <HeaderActions />
      </div>
    </header>
  )
}
