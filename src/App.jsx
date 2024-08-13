import { useState } from 'react'
import Fullstack from './components/Fullstack/Fullstack'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Fullstack/>
    </>
  )
}

export default App
