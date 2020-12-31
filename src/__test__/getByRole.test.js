import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

describe('Screen getByRole Test', () => {
  it('hidden', () => {
    render(
      <body>
        <main aria-hidden="true">
          <button>Open dialog</button>
        </main>
        <div>
          <button>Close dialog</button>
        </div>
      </body>,
    )

    // <button>Close dialog</button>
    screen.getByRole('button')
  })
  it('selected', () => {
    render(
      <body>
        <div role="tablist">
          <button role="tab" aria-selected="true">
            Native
          </button>
          <button role="tab" aria-selected="false">
            React
          </button>
          <button role="tab" aria-selected="false">
            Cypress
          </button>
        </div>
      </body>,
    )

    // <button role="tab" aria-selected="true">Native</button>
    screen.getByRole('tab', {
      selected: true,
    })
  })
  it('checked', () => {
    render(
      <body>
        <section>
          <button role="checkbox" aria-checked="true">
            Sugar
          </button>
          <button role="checkbox" aria-checked="false">
            Gummy bears
          </button>
          <button role="checkbox" aria-checked="false">
            Whipped cream
          </button>
        </section>
      </body>,
    )

    /**
     * <button role="checkbox" aria-checked="false">Gummy bears</button>
     * button role="checkbox" aria-checked="false">Whipped cream</button>
     */
    screen.getAllByRole('checkbox', {
      checked: false,
    })
  })
  it('pressed', () => {
    render(
      <body>
        <section>
          <button aria-pressed="true">👍</button>
          <button aria-pressed="false">👎</button>
        </section>
      </body>,
    )

    // <button aria-pressed="true">👍</button>
    screen.getByRole('button', {
      pressed: true,
    })
  })
  it('expanded', () => {
    render(
      <body>
        <nav>
          <ul>
            <li>
              <a aria-expanded="false" aria-haspopup="true" href="...">
                Expandable Menu Item
              </a>
              <ul>
                <li>
                  <a href="#">Submenu Item 1</a>
                </li>
                <li>
                  <a href="#">Submenu Item 1</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Regular Menu Item</a>
            </li>
          </ul>
        </nav>
      </body>,
    )

    // <a aria-expanded="false" aria-haspopup="true" href="..."> Expandable Menu Item </a>
    screen.getByRole('link', {
      expanded: false,
    })
  })

  it('queryFallback', () => {
    render(<div role="switch checkbox">queryFallback</div>)

    // <error>
    // screen.debug(
    //   screen.getByRole('checkbox'),
    // )
    screen.debug(
      screen.getByRole('checkbox', {
        queryFallbacks: true,
      }),
    )
  })
  it('level', () => {
    render(
      <body>
        <section>
          <h1>Heading Level One</h1>
          <h2>Heading Level Two</h2>
          <h3>Heading Level Three</h3>
        </section>
      </body>,
    )
    // <h1>Heading Level One</h1>
    // <h2>Heading Level Two</h2>
    // <h3>Heading Level Three</h3>
    screen.debug(screen.getAllByRole('heading'))

    // <h2>Heading Level Two</h2>
    screen.debug(screen.getAllByRole('heading', { level: 2 }))
  })
})
