import { useState } from "react";

const Student = (e)=>{
let[fName,setFname]=useState(e.fName)
let[lName,setlname]=useState(e.lName)




    return(
        <div>
            <h1>{fName}</h1>
            <h1>{lName}</h1>

        </div>
    )

}
export default Student;