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
      <h1>Vite + React</h1>
      <div className="card">
        {/*create an on click event to increase the count each time button is clicked*/}
        <button onClick={()=>{setCount(count+1)}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
