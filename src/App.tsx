import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

          <img src={'Army-logos.svg'} className="logo" alt="Army logo" />


          <img src={'ASWF-logo.svg'} className="logo react" alt="ASWF logo" />

      </div>
      <h1>Army + Software</h1>
      <div className="card">
        {/*create an on click event to increase the count each time button is clicked*/}
        <button>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
