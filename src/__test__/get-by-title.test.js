import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Header() {
  return (
    <div>
      <h1 title="제목">제목</h1>
      <h2 title="부제목">부제목</h2>
    </div>
  )
}

describe('Screen getByTitle Test', () => {
  it('getByTitle', () => {
    render(<Header />)

    // <img />
    screen.getAllByTitle('제목')
  })
  it('getByTitle', () => {
    render(<Header />)

    screen.getAllByTitle(/\.*?제목/)
  })
  it('queryByTitle', () => {
    render(<Header />)

    screen.queryByTitle('부제목')
  })
  it('queryAllByTitle', () => {
    render(<Header />)

    screen.queryAllByTitle(/\.*?제목/)
  })
  it('findByTitle', () => {
    render(<Header />)

    screen.findByTitle('제목')
  })
  it('findAllByTitle', () => {
    render(<Header />)

    screen.findAllByTitle(/\.*?제목/)
  })
})
