import React from 'react'
import { useRef } from 'react';

export default function UserRefFirstUseCase() {
    const countRef = useRef(0);
    const handleButtonClick = () => {
        countRef.current += 1;
        console.log("Count: ", countRef.current);
    }
  return (
    <div >
      <p>Count: {countRef.current}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  )
}
