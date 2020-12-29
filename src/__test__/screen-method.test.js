import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import App from '../App'

describe('Screen Method', () => {
  it('debut', () => {
    render(<App />)

    screen.debug() // document
    screen.debug(screen.getByText('Home')) // <div>Home</div>
  })
  it('logTestingPlaygroundURL', () => {
    render(<App />)

    screen.logTestingPlaygroundURL()
  })
})
