import React,{Component} from 'react';
import Counter from './Counter';
import './App.css';
import User from './User'



function App() {
  return (
    <div className='App'>
   <Counter num={10} firstname={""}/>
   <User/>
  
    </div>
  );
}

export default App;