import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Images() {
  return (
    <div>
      <img
        alt="올라프 이미지 1"
        src="https://img1.daumcdn.net/thumb/C500x500.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/Ree/image/3j-gZIYF4g8IwLcZ8-cJyd-5REI.jpg"
      />
      <img
        alt="올라프 이미지 2"
        src="https://img1.daumcdn.net/thumb/C500x500.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/Ree/image/3j-gZIYF4g8IwLcZ8-cJyd-5REI.jpg"
      />
    </div>
  )
}

describe('Screen getByAlt Test', () => {
  it('getByAltText', () => {
    render(<Images />)

    // <img />
    screen.getByAltText('올라프 이미지 1')
  })
  it('getAllByAltText', () => {
    render(<Images />)

    // [<img/>, <img/>]
    screen.debug(screen.getAllByAltText(/올라프 이미지.*?/i))
  })
  it('queryByAltText', () => {
    render(<Images />)

    screen.queryByAltText('올라프 이미지 1')
  })
  it('queryAllByAltText', () => {
    render(<Images />)

    screen.queryAllByAltText(/올라프 이미지.*?/i)
  })
  it('findByAltText', () => {
    render(<Images />)

    screen.findByAltText('올라프 이미지 1')
  })
  it('findAllByAltText', () => {
    render(<Images />)

    screen.findAllByAltText(/올라프 이미지.*?/i)
  })
})
