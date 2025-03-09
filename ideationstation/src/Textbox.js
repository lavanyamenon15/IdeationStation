import logo from './logo.svg';
import { useState } from 'react';
import './Textbox.css'; // !!! change to textbox css file after creating

function Textbox() {
  const [val, setVal] = useState("Enter your thoughts!")
  const submit = () => {
    alert(val)
  }
  const change = event => {
    setVal(event.target.value)
  }
  return (
    <div className="Textbox">
      <input onChange = {change} 
      value = {val} />
      <button onClick = {submit}>Submit</button> 
    </div>
  );
}

export default Textbox;
