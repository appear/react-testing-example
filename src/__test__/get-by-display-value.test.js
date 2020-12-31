import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

function Input() {
  return <input placeholder="이름을 입력해주세요" value="홍길동" />
}

function Form() {
  return (
    <div>
      <input placeholder="이름을 입력해주세요" value="홍길동" />
      <textarea placeholder="이름을 입력해주세요" value="홍길동" />
      <select>
        <option value="홍길동">홍길동</option>
      </select>
    </div>
  )
}

describe('Screen getByDisplayValue Test', () => {
  it('getByDisplayValue', () => {
    render(<Input />)

    screen.getByDisplayValue('홍길동')
  })
  it('getAllByDisplayValue', () => {
    render(<Form />)

    screen.getAllByDisplayValue('홍길동')
  })
  it('queryByDisplayValue', () => {
    render(<Input />)

    screen.queryByDisplayValue('홍길동')
  })
  it('queryAllByDisplayValue', () => {
    render(<Form />)

    screen.queryAllByDisplayValue('홍길동')
  })
  it('findByDisplayValue', () => {
    render(<Input />)

    screen.findByDisplayValue('홍길동')
  })
  it('findAllByDisplayValue', () => {
    render(<Form />)

    screen.findAllByDisplayValue('홍길동')
  })
})
