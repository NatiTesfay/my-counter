import { useState } from "react";

const Teacher =({teacher})=>{


    const[lname,setLname]=useState(teacher="tesfay")
    const nameChange = ()=>{
        setLname("cohen")
    }
    
    const[fname,setfname]=useState(teacher="Netanel")
    const fNameChange = ()=>{
        setfname("or")
    }    
    const changeUpperCase = ()=>{
        
    }

    const[teach,setTeache]=useState(teacher)
   


    return(
        <div>
            <h1>
                {lname}
            </h1>
            <h2>
                {fname}
            </h2>
            <h3>
                {teacher}
            </h3>
            <button onClick={nameChange}>Change Name</button>
            <button onClick={fNameChange}>Change FName</button>
            <button onClick={changeUpperCase}>Change Names</button>

        </div>
    )
}

export default Teacher;