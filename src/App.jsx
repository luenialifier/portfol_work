import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './componets/Sidenav'
import Main from './componets/Main'
import Work from './componets/Work'
import Projects from './componets/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
      </div>
    </>
  )
}

export default App
