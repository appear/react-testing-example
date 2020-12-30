import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Label() {
  return (
    <label htmlFor="이름">
      이름
      <input id="이름" placeholder="홍길동" />
    </label>
  )
}

function Labels() {
  return (
    <div>
      <label>
        이름
        <input />
      </label>
      <label>
        이름
        <input />
      </label>
    </div>
  )
}

describe('Screen getByLabel Test', () => {
  it('getByLabelText', () => {
    render(<Label />)

    // <input />
    screen.getByLabelText('이름', { selector: 'input' })
  })
  it('getAllByLabelText', () => {
    render(<Labels />)

    // [<input/>, <input/>]
    screen.debug(screen.getAllByLabelText(/이름/))
  })
  it('getAllByLabelText', () => {
    render(
      <div>
        <label>이름</label>
        <input id="이름" />
        <label htmlFor="usename">이름</label>
        <input />
        <input />
        <input />
      </div>,
    )

    // error
    // id, for 가 없다면 render 영역 전체를 바라보게된다.
    screen.debug(screen.getAllByLabelText(/이름/))
  })
  it('queryByLabelText', () => {
    render(<Label />)

    screen.queryByLabelText('이름')
  })
  it('queryAllByLabelText', () => {
    render(<Labels />)

    screen.queryAllByLabelText('이름')
  })
  it('findByLabelText', () => {
    render(<Label />)

    screen.queryByLabelText(/이름/)
  })
  it('findAllByLabelText', () => {
    render(<Label />)

    screen.queryAllByLabelText(/이름/)
  })
})
