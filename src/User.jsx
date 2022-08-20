import { useState } from "react";
import UserAdd from './UserAdd';
import UserCreate from './UserCreate';

const User =()=>{

    nextComponent=()=>{

    }
  
    return(
        <div>
                <div>
                <h1>2 massage</h1>
                <UserAdd/>
                </div>
              
                <div>
                <h1>2 massage</h1>
                <UserCreate 
                 name="nati"
                 lname="tesfay" 
                 ages="25"
                 email="netaneltes@gmail.com"
                 passs="5050"/>
                </div>
                <button onClick={nextComponent}>next component</button>
                
        </div>
    )
}
export default User;