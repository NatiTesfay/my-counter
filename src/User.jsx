import { useState } from "react";
import UserAdd from './UserAdd';
import UserCreate from './UserCreate';

const User =()=>{
  
    return(
        <div>
            <UserAdd/>
            <UserCreate 
            name="nati"
            lname="tesfay" 
            ages="25"
            email="netaneltes@gmail.com"
            passs="5050"/>
        </div>
    )
}
export default User;