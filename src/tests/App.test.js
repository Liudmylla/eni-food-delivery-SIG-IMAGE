import { render, screen } from '@testing-library/react'
import App from '../App'

test('Render Home page', () => {
  render(<App />)
  const homeElements = screen.getAllByText(/Home/i)
  for (const e of homeElements) {
    expect(e).toBeInTheDocument()
  }
})
