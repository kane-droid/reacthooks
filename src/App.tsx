import {useCallback, useMemo, useState} from 'react'
import './App.css'
import MinusButton from "./MinusButton";

function App() {
  const [count, setCount] = useState(0)

  //created the useMemo function here

  //created the useCallBack function here

  return (
    <>
      <div>

          <img src={'Army-logos.svg'} className="logo" alt="Army logo" />


          <img src={'ASWF-logo.svg'} className="logo react" alt="ASWF logo" />

      </div>
      <h1>Army + Software</h1>
      <div className="card">
        <button onClick={()=>{setCount(count +1)}}>
          count is {count}
          <br/>
          squared count is {}
        </button>
        <br/>
        <br/>
        <MinusButton ></MinusButton>
      </div>
    </>
  )
}

export default App
