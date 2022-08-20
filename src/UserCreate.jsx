import { useState } from "react";


const UserCreate =({name,lname,ages,email,passs})=>{
    const[fName,setFName] = useState(name)
    const[lName,setLName] = useState(lname)
    const[age,setAge] = useState(ages)
    const[mail,setEmail] = useState(email)
    const[password,setPassWord] = useState(passs)

    const names = (e)=>{
    setFName(e.target.value)
    
    }
    const lnames = (e)=>{
    setLName(e.target.value)
    }
    const agess = (e)=>{
     setAge(e.target.value)
    }
    const userMail = (e)=>{
    setEmail(e.target.value)
    }
    const passss = (e)=>{
    setPassWord(e.target.value)
    }
    const printBtn =()=>{
        if (fName !="" && lName !="" && age != "" && mail != "" && password != "" ) {
            alert("הצלחה")
        }
    }
   
  
    return(
        <div>
                 <form>
                
                <input type="text" onChange={names} placeholder={'Firstname'}  />
                
                <input type="text" onChange={lnames} placeholder={'Lastname'}   />
               
                <input type="age" onChange={agess} placeholder={'Age'}  />
                
                <input type="email" onChange={userMail} placeholder={'Mail'}  />
                
                <input type="password" onChange={passss} placeholder={'Password'} />
               
                <button onClick={printBtn}>Click</button>
            </form>
        </div>
    )
}
export default UserCreate;