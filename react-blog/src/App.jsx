import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/header'
import { ButtonWork } from './assets/header'
import ToDO from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
     
     <ToDO/>

    
    </>
  )
}

export default App
