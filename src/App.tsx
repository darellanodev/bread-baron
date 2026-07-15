import { useState } from 'react'
import { WelcomeScreen } from '@/features/welcome/WelcomeScreen'
import { GameScreen } from '@/features/game/GameScreen'
import { HireHelperScreen } from '@/features/hireHelper/HireHelperScreen'
import { EconomyScreen } from '@/features/economy/EconomyScreen'
import { IndustryScreen } from '@/features/industry/IndustryScreen'
import { GameSettingsScreen } from '@/features/gameSettings/GameSettingsScreen'
import { DayTimer } from '@/hooks/DayTimer'
import { Header } from '@/components/header'
import { useHasSave } from '@/hooks/useHasSave'
import { loadFromStorage } from '@/utils/loadFromStorage'

function App() {
  const hasSave = useHasSave()
  const [screen, setScreen] = useState<
    'welcome' | 'game' | 'hireHelper' | 'economy' | 'industry' | 'gameSettings'
  >('welcome')

  const showHeader = screen !== 'welcome' && screen !== 'gameSettings'

  const handleContinue = () => {
    if (loadFromStorage()) {
      setScreen('game')
    }
  }

  return (
    <>
      {showHeader && <DayTimer />}
      {showHeader && <Header onEconomy={() => setScreen('economy')} />}
      {screen === 'welcome' ? (
        <WelcomeScreen
          onNext={() => setScreen('gameSettings')}
          onContinue={handleContinue}
          hasSave={hasSave}
        />
      ) : screen === 'hireHelper' ? (
        <HireHelperScreen onClose={() => setScreen('game')} />
      ) : screen === 'economy' ? (
        <EconomyScreen onClose={() => setScreen('game')} />
      ) : screen === 'industry' ? (
        <IndustryScreen onClose={() => setScreen('game')} />
      ) : screen === 'gameSettings' ? (
        <GameSettingsScreen onStart={() => setScreen('game')} />
      ) : (
        <GameScreen
          onHireHelper={() => setScreen('hireHelper')}
          onOpenIndustry={() => setScreen('industry')}
        />
      )}
    </>
  )
}
export default App
