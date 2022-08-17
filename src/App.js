import React,{Component} from 'react';
import Counter from './Counter';
import './App.css';


function App() {
  return (
    <div className='App'>
   <Counter num={10}/>
    </div>
  );
}

export default App;