import { useState } from 'react'
import WelcomeScreen from './features/welcome/WelcomeScreen'
import { GameScreen } from './features/game/GameScreen'

function App() {
  const [screen, setScreen] = useState<'welcome' | 'game'>('welcome')

  return screen === 'welcome' ? (
    <WelcomeScreen onStart={() => setScreen('game')} />
  ) : (
    <GameScreen />
  )
}

export default App
