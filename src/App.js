import React,{Component} from 'react';
import Counter from './Counter';
import './App.css';
import User from './User'
import CourseComponent from './CoursComponent'


function App() {
  return (
    <div className='App'>
   {/* <Counter num={10} firstname={""}/>
   <User/> */}
   <CourseComponent/>
  
    </div>
  );
}

export default App;