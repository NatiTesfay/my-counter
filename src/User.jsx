import { useState } from "react";
import UserAdd from './UserAdd';
import UserCreate from './UserCreate';

const User =()=>{
  
    return(
        <div>
            <UserAdd/>
            <UserCreate 
            name=""
            lname="" 
            ages=""
            email=""
            passs=""/>
        </div>
    )
}
export default User;