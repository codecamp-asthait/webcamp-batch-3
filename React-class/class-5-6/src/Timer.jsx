import { useEffect, useState } from "react";

export default function Timer(){
    const [seconds , setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        // return () => clearInterval(interval);
    }, []);

    return(
        <article className="card">
            <h3>Timer</h3>
            <p>Seconds: {seconds}</p>
        </article>
    )
}

// const seconds = 0;
// setInterval(()=>{
//     seconds++;
//     document.querySelector(".card p").textContent = `Seconds: ${seconds}`;
// } , 1000)

