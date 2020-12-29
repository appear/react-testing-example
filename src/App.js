import { Router, Link } from '@reach/router'

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </div>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  )
}

export default App
