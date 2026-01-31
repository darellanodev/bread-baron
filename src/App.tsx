import { useState } from 'react'
import WelcomeScreen from './WelcomeScreen'
import { GameScreen } from './GameScreen'

function App() {
  const [screen, setScreen] = useState<'welcome' | 'game'>('welcome')

  return screen === 'welcome' ? (
    <WelcomeScreen onStart={() => setScreen('game')} />
  ) : (
    <GameScreen />
  )
}

export default App
