import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Button from './Button'
import Toolbar from './ToolBar'


function App() {

  // [number, React.Dispatch<React.SetStateAction<number>>]

  const [showToolbar, setShowToolbar] = useState(true)
  const [count, setCount] = useState(0)

  // const person = {
  // name: 'Gregorio Y. Zara',
  // theme: {
  //   backgroundColor: 'black',
  //   color: 'pink'
  // }
  // };

  // function changePersonName(){
  //   person.name = "Rajib bhai"
  // }

  // person.name = "Rajib"

  // console.log(person.name)

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
        <button onClick={() => { setCount(count + 1); setShowToolbar(!showToolbar); }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* <Person {...person} title="Developer"/> */}
      {/* 
      <Person name={person.name} style={person.theme} title="Developer"/>
      <Person name="nayan" title="Developer" style={person.theme}>
        <div>From Chittagong</div>
      </Person>
      <Button onClick={() => alert('Button was clicked!')}>
        Add Person
      </Button>
      <Button onClick={() => alert('Remove Person button clicked!')}>
        Remove Person
      </Button> */}
      {/* <Button>
        Delete Person
      </Button> */}
      {/* <img alt="/> */}

      {/* Event Propagation */}
 
      {showToolbar && <Toolbar/>}

      {/* State: A components memory */}

      {/* <Button onClick={changePersonName}>
        Change Person Name
      </Button> */}
    </>
  )
}

export default App
