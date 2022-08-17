import { useState } from "react";


const UserCreate =({name,lname,ages,email,passs})=>{
    const[fName,setFName] = useState(name)
    const[lName,setLName] = useState(lname)
    const[age,setAge] = useState(ages)
    const[mail,setEmail] = useState(email)
    const[password,setPassWord] = useState(passs)

    const names = (e)=>{
    setFName(e.target.value)
    console.log(e.target.value)
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
        if (fName !="" && lName !="" && age != null && mail != "" && password != null ) {
            alert("הצלחה")
            console.log(age)
            console.log(mail)
            console.log(password)
        }
    }
   
  
    return(
        <div>
                 <form>
                {/* <h1>{fName}</h1> */}
                <input type="text" onChange={names} placeholder={'Firstname'}  />
                {/* <h1>{lName}</h1> */}
                <input type="text" onChange={lnames} placeholder={'Lastname'}   />
                {/* <h1>{age}</h1> */}
                <input type="age" onChange={agess} placeholder={'Age'}  />
                {/* <h1>{email}</h1> */}
                <input type="email" onChange={userMail} placeholder={'Mail'}  />
                {/* <h1>{password}</h1> */}
                <input type="password" onChange={passss} placeholder={'Password'} />
                {/* <h1>{passwordCheck}</h1> */}
                <button onClick={printBtn}>Click</button>
            </form>
        </div>
    )
}
export default UserCreate;