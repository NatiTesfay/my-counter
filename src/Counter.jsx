import { useState } from "react";

const Counter = ({num}) => {
    const[countUp,setCounter] = useState(num);
    const setCounterDown = ()=>{setCounter(countUp-1)};
    const setCounterFive =()=>{setCounter(5)}
    const setCounterZero =()=>{setCounter(0)}

    return(
        <div>
            <p>{countUp}</p>
            <button onClick={()=>setCounter(countUp+1)}>Counter Up</button>
            <button onClick={setCounterDown}>Counter Down</button>
            <button onClick={setCounterFive}>change to 5</button>
            <button onClick={setCounterZero}>0</button>
        </div>
    );
}
export default Counter;