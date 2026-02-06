import { useState } from 'react'
import WelcomeScreen from './features/welcome/WelcomeScreen'
import { GameScreen } from './features/game/GameScreen'
import HireHelperScreen from './features/hireHelper/HireHelperScreen'
import EconomyScreen from './features/economy/EconomyScreen'
import { DayTimer } from './hooks/DayTimer'

function App() {
  const [screen, setScreen] = useState<
    'welcome' | 'game' | 'hireHelper' | 'economy'
  >('welcome')

  return (
    <>
      {screen === 'game' && <DayTimer />}
      {screen === 'welcome' ? (
        <WelcomeScreen onStart={() => setScreen('game')} />
      ) : screen === 'hireHelper' ? (
        <HireHelperScreen onClose={() => setScreen('game')} />
      ) : screen === 'economy' ? (
        <EconomyScreen onClose={() => setScreen('game')} />
      ) : (
        <GameScreen
          onHireHelper={() => setScreen('hireHelper')}
          onEconomy={() => setScreen('economy')}
        />
      )}
    </>
  )
}
export default App
