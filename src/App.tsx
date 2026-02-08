import { useState } from 'react'
import WelcomeScreen from './features/welcome/WelcomeScreen'
import { GameScreen } from './features/game/GameScreen'
import HireHelperScreen from './features/hireHelper/HireHelperScreen'
import EconomyScreen from './features/economy/EconomyScreen'
import { DayTimer } from './hooks/DayTimer'
import { Header } from './features/game/layout/Header'

function App() {
  const [screen, setScreen] = useState<
    'welcome' | 'game' | 'hireHelper' | 'economy'
  >('welcome')

  const showHeader = screen !== 'welcome'
  const showDayTimer =
    screen === 'game' || screen === 'hireHelper' || screen === 'economy'

  return (
    <>
      {showDayTimer && <DayTimer />}
      {showHeader && <Header onEconomy={() => setScreen('economy')} />}
      {screen === 'welcome' ? (
        <WelcomeScreen onStart={() => setScreen('game')} />
      ) : screen === 'hireHelper' ? (
        <HireHelperScreen onClose={() => setScreen('game')} />
      ) : screen === 'economy' ? (
        <EconomyScreen onClose={() => setScreen('game')} />
      ) : (
        <GameScreen onHireHelper={() => setScreen('hireHelper')} />
      )}
    </>
  )
}
export default App
