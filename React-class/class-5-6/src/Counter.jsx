import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter component rendered , count value is ", count);

  useEffect(()=>{
    console.log("useEffect called in Counter component")
    setCount((value) => value + 1);
  }, [])

  //useEffect run in initial render 
  // i
  return (
    <article className="card">
      <h3>Counter</h3>
      <p>Count: {count}</p>
      <div className="row">
        <button onClick={() => setCount((value) => value + 1)}>Increment</button>
        <button onClick={() => setCount((value) => value - 1)}>Decrement</button>
      </div>
    </article>
  );
}
