import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from '../src/App'

describe('navigation', () => {
  it('navigates to GameScreen when Start button is clicked', async () => {
    render(<App />)

    const startBtn = screen.getByText(/Start Kneading!/i)
    expect(startBtn).toBeInTheDocument()

    const user = userEvent.setup()
    await user.click(startBtn)

    expect(await screen.findByText(/Active Orders/i)).toBeInTheDocument()
  })
})
