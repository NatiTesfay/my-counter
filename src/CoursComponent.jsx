import { useState } from "react";
import Teacher from "./Teacher"

const CourseComponent = ()=>{
    const courseArray = ["ENGLISH","SPANISH","ARABIC","JSPANESE","RUSSIAN"]
    const[students,setStudents]=useState("avi","or","asi","lior","shon")
    const[teacher,setTeacher]=useState({fname:"N/A",fname:"N/A"})
     const[obs,setObjs]=useState({fName:"nati",lName:"tesfay",age:"25",})
     const changeState = (courseArray)=>{
        console.log(
        setObjs()
        )
     }

    return(
        <div>
             {courseArray.map((item)=><h1>{item}</h1>)}
             <Teacher  />
             <button onClick={changeState}>Change state</button>
        </div>
    )


};
export default CourseComponent;