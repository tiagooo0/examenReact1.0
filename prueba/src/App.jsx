import { useState } from 'react'
import './App.css'
//hago mis imports
import Calculadora from './components/Calculadora'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculadora/>
      </>
  )
}

export default App
