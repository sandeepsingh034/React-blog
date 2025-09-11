import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>Hey there this is a React JS tutorial</h1>
      <h1 id='helo'>So that’s up for today</h1>
    </>
  )
}

export default App
