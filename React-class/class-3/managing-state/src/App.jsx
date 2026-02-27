import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import BatchUpdate from './BatchUpdate'
import Person from './Person'

function App() {
  const [countObj , setCountObj]  = useState({
    value: 0,
    name: "count"
  })
  const [show , setShow] = useState(true);
  // const updateCount = () => { setCount(count + 0)
  // }

  const updateCount = () => {setCountObj({ ...countObj, value: countObj.value + 1 })
  }

  const persons = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];


  const [key , setKey ] = useState("initial");

  console.log("render App")
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button> */}
        <Count count={countObj.value} updateCount={updateCount} />
        {show && <BatchUpdate />}
        { <Count count={countObj.value} updateCount={updateCount} />}
      </div>

      {
        persons.map(person => (
          <Person key={ key} person={person} setKey={setKey} />
        ))
      }
      
      <button onClick={() => setShow(!show)}>Toggle BatchUpdate</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;

