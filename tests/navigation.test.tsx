import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from '../src/App'

describe('navigation', () => {
  it('navigates to GameScreen when Start Baking button is clicked', async () => {
    render(<App />)

    const nextBtn = screen.getByText(/Next/i)
    expect(nextBtn).toBeInTheDocument()

    const user = userEvent.setup()
    await user.click(nextBtn)

    const startBtn = screen.getByText(/Start Baking!/i)
    await user.click(startBtn)

    expect(await screen.findByText(/Active Orders/i)).toBeInTheDocument()
  })

  it('navigates to HireHelpersScreen when Hire Helper button is clicked', async () => {
    render(<App />)

    const nextBtn = screen.getByText(/Next/i)
    const user = userEvent.setup()
    await user.click(nextBtn)

    const startBtn = screen.getByText(/Start Baking!/i)
    await user.click(startBtn)

    const hireHelperBtn = screen.getByText(/Hire Helper/i)
    await user.click(hireHelperBtn)

    expect(await screen.findByText(/HIRE A NEW HELPER/i)).toBeInTheDocument()
  })
})
