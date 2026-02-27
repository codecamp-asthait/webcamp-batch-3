import React from 'react'

export default function BatchUpdate() {
    const [number, setNumber] = React.useState(0)
    const updateCount = () => {
       setNumber(1);
    //    setNumber(0);
    }
  console.log("render BatchUpdate")
  return (

    <>
    <p>Count: {number}</p>
      <button onClick={updateCount}>Update</button>
    </>
  )
}

// in this inital snapshot inital value count = 0; 