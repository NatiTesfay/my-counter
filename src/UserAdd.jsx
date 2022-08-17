import { useState } from "react";



const UserAdd = () =>{
    const[fName,setFName] = useState("")
    const[lName,setLName] = useState("")
    const[age,setAge] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassWord] = useState("")
    const[passwordCheck,setPassWordCheck] = useState("")

    const changeFirstName = (e)=>{
        setFName(e.target.value)
    }
    const changeLasttName = (e)=>{
        setLName(e.target.value)
    }
    const changAge = (e)=>{
        setAge(e.target.value)
    }
    const mail = (e)=>{
        setEmail(e.target.value)
    }
    const pass = (e)=>{
        setPassWord(e.target.value)
    }
    const passCheck = (e)=>{
        setPassWordCheck(e.target.value)
    }
    
    const table = (e)=>{
    e.preventDefault()
  
    }
 
  

  

    

    return(
        <div>
            <form onChange={table}>
                {/* <h1>{fName}</h1> */}
                <input type="text" onChange={changeFirstName} placeholder={'Firstname'}  />
                {/* <h1>{lName}</h1> */}
                <input type="text" onChange={changeLasttName} placeholder={'Lastname'}   />
                {/* <h1>{age}</h1> */}
                <input type="age" onChange={changAge} placeholder={'Age'}  />
                {/* <h1>{email}</h1> */}
                <input type="email" onChange={mail} placeholder={'Mail'}  />
                {/* <h1>{password}</h1> */}
                <input type="password" onChange={pass} placeholder={'Password'} />
                {/* <h1>{passwordCheck}</h1> */}
                <input type="password" onChange={passCheck} placeholder={'password confirm'} />
            </form>
            <p>
            <table>
    <thead>
      <th>first name</th>
      <th>last name</th>
      <th>age</th>
      <th>email</th>
      <th>password</th>
      <th>passwordCheck</th>
    </thead>
    <tbody>
      <tr>
        <td>{fName}</td>
        <td>{lName}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>{passwordCheck}</td>
      </tr>
    </tbody>
    </table>
            </p>
        </div>
    )
}

export default UserAdd;

