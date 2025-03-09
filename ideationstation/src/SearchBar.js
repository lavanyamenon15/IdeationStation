import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
  
    const getThoughts = async () => {
      try {
        const response = await fetch("http://localhost:3000/Thoughts");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      getThoughts();
    }, []);
  
    useEffect(() => {
      if (searchTerm.trim() === "") {
        setFilteredResults([]);
      } else {
        const filtered = data.filter(item =>
          item.thought.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredResults(filtered);
      }
    }, [searchTerm, data]);
  
    return (
      <div className='search-container'>
        <input className='search-box'
          type="text"
          placeholder="Search thoughts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="results-container">
            {filteredResults.map((item) => (
            <div key={item.id} className="result-card">
                <p>{item.thought.length > 100 ? item.thought.substring(0, 100) + "..." : item.thought}</p>
            </div>
            ))}
        </div>
        {/* <ul>
          {filteredResults.map((item) => (
            <li key={item.id}>{item.thought}</li>
          ))}
        </ul> */}
      </div>
    );
  };

export default SearchBar;