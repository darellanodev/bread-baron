import { useState } from 'react'
import { WelcomeScreen } from '@/features/welcome/WelcomeScreen'
import { GameScreen } from '@/features/game/GameScreen'
import { HireHelperScreen } from '@/features/hireHelper/HireHelperScreen'
import { EconomyScreen } from '@/features/economy/EconomyScreen'
import { IndustryScreen } from '@/features/industry/IndustryScreen'
import { DayTimer } from '@/hooks/DayTimer'
import { Header } from '@/features/game/layout/Header'

function App() {
  const [screen, setScreen] = useState<
    'welcome' | 'game' | 'hireHelper' | 'economy' | 'industry'
  >('welcome')

  const showHeader = screen !== 'welcome'

  return (
    <>
      {showHeader && <DayTimer />}
      {showHeader && <Header onEconomy={() => setScreen('economy')} />}
      {screen === 'welcome' ? (
        <WelcomeScreen onStart={() => setScreen('game')} />
      ) : screen === 'hireHelper' ? (
        <HireHelperScreen onClose={() => setScreen('game')} />
      ) : screen === 'economy' ? (
        <EconomyScreen onClose={() => setScreen('game')} />
      ) : screen === 'industry' ? (
        <IndustryScreen onClose={() => setScreen('game')} />
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
