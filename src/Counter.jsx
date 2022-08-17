import { useState } from "react";

const Counter = ({num,firstname}) => {
    const[countUp,setCounter] = useState(num,firstname);
    const setCounterDown = ()=>{setCounter(countUp-1)};
    const setCounterFive =()=>{setCounter(5)}
    const setCounterZero =()=>{setCounter(0)}
    const changeFirstName = (e)=>{
        setCounter(e.target.value)
    }

    return(
        <div>
            <h1>{countUp}</h1>
            <button onClick={()=>setCounter(countUp+1)}>Counter Up</button>
            <button onClick={setCounterDown}>Counter Down</button>
            <button onClick={setCounterFive}>change to 5</button>
            <button onClick={setCounterZero}>0</button>
            <br/>
            <input type="text" onChange={changeFirstName} />
        </div>
    );
}
export default Counter;