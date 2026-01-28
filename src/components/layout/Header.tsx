import { HeaderTitle, HeaderStats, HeaderActions } from './header/index'

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f3f0] dark:border-b-[#3a3121] bg-white dark:bg-[#1a150d] px-10 py-3 z-50">
      <HeaderTitle />
      <div className="flex flex-1 justify-end gap-8">
        <HeaderStats />
        <HeaderActions />
      </div>
    </header>
  )
}
