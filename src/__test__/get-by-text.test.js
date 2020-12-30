import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Link() {
  return <a href="#">home</a>
}

function Links() {
  return (
    <div>
      <div>
        <a href="#">home</a>
      </div>
      <div>
        <a href="#">home</a>
      </div>
    </div>
  )
}

describe('Screen getByText Test', () => {
  it('getByText', () => {
    render(<Link />)

    // <input />
    screen.getByText('home')
  })
  it('getAllByText', () => {
    render(<Links />)

    // [<input/>, <input/>]
    screen.debug(screen.getAllByText(/home/))
  })
  it('queryByText', () => {
    render(<Link />)

    screen.queryByText('home')
  })
  it('queryAllByText', () => {
    render(<Links />)

    screen.queryAllByText('home')
  })
  it('findByText', () => {
    render(<Link />)

    screen.findByText(/home/)
  })
  it('findAllByText', () => {
    render(<Links />)

    screen.findAllByText(/home/)
  })
})
