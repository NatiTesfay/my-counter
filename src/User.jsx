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
            ages={0}
            email=""
            passs={0} />
        </div>
    )
}
export default User;