import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Label() {
  return (
    <label htmlFor="username">
      Username
      <input id="username" />
    </label>
  )
}

function Labels() {
  return (
    <div>
      <label>
        <input />
        Username
      </label>
      <label>
        <input />
        Username
      </label>
    </div>
  )
}

describe('Screen getByLabel Test', () => {
  it('getByLabelText', () => {
    render(<Label />)

    // <input />
    screen.getByLabelText('Username', { selector: 'input' })
  })
  it('getAllByLabelText', () => {
    render(<Labels />)

    // [<input/>, <input/>]
    screen.debug(screen.getAllByLabelText(/Username/))
  })
  it('getAllByLabelText', () => {
    render(
      <div>
        <label>Username</label>
        <input id="username" />
        <label htmlFor="usename">Username</label>
        <input />
        <input />
        <input />
      </div>,
    )

    // error
    // id, for 가 없다면 render 영역 전체를 바라보게된다.
    screen.debug(screen.getAllByLabelText(/Username/))
  })
  it('queryByLabelText', () => {
    render(<Label />)

    screen.queryByLabelText('Username')
  })
  it('queryAllByLabelText', () => {
    render(<Labels />)

    screen.queryAllByLabelText('Username')
  })
  it('findByLabelText', () => {
    render(<Label />)

    screen.queryByLabelText(/Username/)
  })
  it('findAllByLabelText', () => {
    render(<Label />)

    screen.queryAllByLabelText(/Username/)
  })
})
