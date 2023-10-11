import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [catImage, setCatImage] = useState('');
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => setCatImage(data[0].url))
  }, []);

  return (
    <>
      <div>
        <img src={'ASWF-logo.svg'} alt={'swf logo'}/>
      </div>
      <div>
        <h1>Random Cat Picture</h1>
        {catImage && <img src={catImage} alt="Random cat"/>}
      </div>
      <div className="card">
        <button onClick={()=>{setCount(count +1)}}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
