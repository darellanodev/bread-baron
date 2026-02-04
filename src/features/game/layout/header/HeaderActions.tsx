import { SettingsMenu, RoundedButton } from '../../../../components/ui'

export function HeaderActions() {
  return (
    <div className="flex gap-2">
      <RoundedButton className="min-w-[84px] h-10 bg-primary text-textLight active:scale-95 rounded-full flex items-center justify-center">
        Pause game
      </RoundedButton>
      <SettingsMenu />
    </div>
  )
}
