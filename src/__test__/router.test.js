import React from 'react'
import { render } from '@testing-library/react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'
import '@testing-library/jest-dom/extend-expect'

import App from '../App'

function renderWithRouter(ui, router) {
  const { route = '/', history = createHistory(createMemorySource(route)) } =
    router || {}

  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  }
}

describe('Router Test', () => {
  it('/ 진입시 Home 페이지를 노출한다.', () => {
    const { container } = renderWithRouter(<App />)

    console.log('container', container.innerHTML)

    expect(container.innerHTML).toMatch('Home')
  })
  it('/about 로 진입시 About 페이지를 노출한다', () => {
    const { container } = renderWithRouter(<App />, {
      route: '/about',
    })

    expect(container.innerHTML).toMatch('About')
  })
  it('/about navigating', async () => {
    const { container, history } = renderWithRouter(<App />)

    await history.navigate('/about')

    expect(container.innerHTML).toMatch('About')
  })
})
