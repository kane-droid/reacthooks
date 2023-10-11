import './App.css'
import AddCounter from "./AddCounter";
import MinusCounter from "./MinusCounter";

function App() {

  return (
    <>
      <div>

        <img src={'Army-logos.svg'} className="logo" alt="Army logo" />


        <img src={'ASWF-logo.svg'} className="logo react" alt="ASWF logo" />

      </div>
      <h1>Army + Software</h1>
      <div className="card">
        <AddCounter/>
        <MinusCounter/>
      </div>
    </>
  )
}

export default App
