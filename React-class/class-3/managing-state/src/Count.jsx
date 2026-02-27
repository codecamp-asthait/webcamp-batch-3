import React from 'react'

export default function Count({ count , updateCount }) {
    // const [count, setCount] = React.useState(0)
    const handleUpdateCount = () => {
       updateCount();
    }
    console.log("render Count")
  return (
    <div>
      <p>Count: {count}</p>
        <button onClick={handleUpdateCount}>Update</button>
    </div>
  )
}
