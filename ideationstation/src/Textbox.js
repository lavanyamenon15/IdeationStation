import { useState } from 'react';
import './Textbox.css'; // !!! change to textbox css file after creating

function Textbox() {
    const [val, setVal] = useState("");
  
    const submit = async () => {
      if (!val.trim()) {
        alert("Please enter a valid thought!");
        return;
      }
  
      const newThought = {
        id: Date.now().toString(),
        thought: val,
        tag: []
      };
  
      try {
        const response = await fetch("http://localhost:3000/Thoughts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newThought),
        });
  
        if (response.ok) {
          alert("Thought saved successfully!");
          setVal(""); // Clear input field
        } else {
          alert("Error saving thought.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to save. Check console for details.");
      }
    };
  
    return (
      <div className="Textbox">
        <input
          type="text"
          onChange={(e) => setVal(e.target.value)}
          value={val}
          placeholder="Enter your thoughts..."
        />
        <button onClick={submit}>Submit</button>
      </div>
    );
  }
  
  export default Textbox;