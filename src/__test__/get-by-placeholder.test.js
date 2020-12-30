import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Input() {
  return <input placeholder="홍길동" />
}

function Inputs() {
  return (
    <div>
      <div>
        <input placeholder="홍길동" />
      </div>
      <div>
        <input placeholder="홍길동" />
      </div>
    </div>
  )
}

describe('Screen getByPlaceholder Test', () => {
  it('getByPlaceholderText', () => {
    render(<Input />)

    // <input />
    screen.getByPlaceholderText('홍길동')
  })
  it('getAllByPlaceholderText', () => {
    render(<Inputs />)

    // [<input/>, <input/>]
    screen.debug(screen.getAllByPlaceholderText(/홍길동/))
  })
  it('queryByPlaceholderText', () => {
    render(<Input />)

    screen.queryByPlaceholderText('홍길동')
  })
  it('queryAllByPlaceholderText', () => {
    render(<Inputs />)

    screen.queryAllByPlaceholderText('홍길동')
  })
  it('findByPlaceholderText', () => {
    render(<Input />)

    screen.findByPlaceholderText(/홍길동/)
  })
  it('findAllByPlaceholderText', () => {
    render(<Inputs />)

    screen.findAllByPlaceholderText(/홍길동/)
  })
})
