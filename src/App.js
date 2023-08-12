import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';


function App() {

  const [input1, setInput1] =useState();
  const [input2, setInput2] =useState();
  const [result, setResult]= useState();

 


  return (
    <div className="App">
      <div className='container'>
        <h1>React Calculator</h1>
        <div className='input'>
          <input type='text' placeholder='Num1' onChange={(event)=>setInput1(event.target.value)}/>
          <input type='text' placeholder='Num2' onChange={(event)=>setInput2(event.target.value)}/>
        </div>
        <div className='btn'>
          <button onClick={()=>setResult(Number(input1)+Number(input2))}>+</button>
          <button onClick={()=>setResult(Number(input1)-Number(input2))}>-</button>
          <button onClick={()=>setResult(Number(input1)*Number(input2))}>*</button>
          <button onClick={()=>setResult(Number(input1)/Number(input2))}>/</button>
        </div>
        <div>
           
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
