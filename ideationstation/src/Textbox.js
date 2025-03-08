import logo from './logo.svg';
import { useState } from 'react';
import './App.css'; // !!! change to textbox css file after creating

function Textbox() {
  const [val, setVal] = useState("Enter your thoughts!")
  const submit = () => {
    alert(val)
  }
  const change = event => {
    setVal(event.target.value)
  }
  return (
    <div className="App">
      <input onChange = {change} 
      value = {val} />
      <button onClick = {submit}>Submit</button> 
    </div>
  );
}

export default Textbox;
