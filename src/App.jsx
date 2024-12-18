import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register_Page from './Components/Register_Page/Register_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register_Page/>
    </>
  )
}

export default App
