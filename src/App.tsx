import { useState } from 'react'
import WelcomeScreen from './features/welcome/WelcomeScreen'
import { GameScreen } from './features/game/GameScreen'
import HireHelperScreen from './features/hireHelper/HireHelperScreen'

function App() {
  const [screen, setScreen] = useState<'welcome' | 'game' | 'hireHelper'>(
    'welcome',
  )

  return screen === 'welcome' ? (
    <WelcomeScreen onStart={() => setScreen('game')} />
  ) : screen === 'hireHelper' ? (
    <HireHelperScreen onClose={() => setScreen('game')} />
  ) : (
    <GameScreen onHireHelper={() => setScreen('hireHelper')} />
  )
}

export default App
