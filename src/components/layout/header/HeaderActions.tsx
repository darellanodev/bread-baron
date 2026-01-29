import { SettingsMenu } from '../../../components/ui/DropdownMenu'

export function HeaderActions() {
  return (
    <div className="flex gap-2">
      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eca013] text-[#181511] text-sm font-bold transition-all active:scale-95 shadow-md">
        Save Game
      </button>
      <SettingsMenu />
    </div>
  )
}
