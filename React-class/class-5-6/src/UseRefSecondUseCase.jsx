import React, { forwardRef } from 'react'
import { useRef } from 'react';

export default function UseRefSecondUseCase() {

  const inputRef = useRef(null);

  const handleSubmitClick = () => {
    if(inputRef.current){
        console.log(inputRef , "input ref")
        inputRef.current.focus();
    }
  }

//   console.log(inputRef , "input ref in render");

  return (
    <div>
        <FocusInput ref={inputRef} />
        <button onClick={handleSubmitClick}>Submit</button>
    </div>
  )
}

const FocusInput = forwardRef((props , ref)=>{
    return <input ref={ref} type="text" placeholder="Enter your name"  />
})
