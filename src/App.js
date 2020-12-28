import { Router, Link } from '@reach/router'

function Home() {
  return <div>Home</div>
}

function About() {
  return <div>About</div>
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
