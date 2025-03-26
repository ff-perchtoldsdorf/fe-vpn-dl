import { useState } from 'react'
import './App.scss'
import Landingpage from './components/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Landingpage />
  )
}

export default App
