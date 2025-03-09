import React, { useState, useEffect } from 'react';
import './FilterTag.css';


function FilterTag() {
    const [data, setData] = useState([])

     const getTags = async () => {
             var requestOptions = {
                 method : "GET",
                 redirect: "follow"
             }
     
             try{ 
                 var result = await fetch("http://localhost:3000/Tags", requestOptions)
                 var resultJSON = setData(await result.json())
                 console.log(resultJSON)
             } catch (e) {
                 
             }
         };
     
         useEffect(()=> {
             getTags();
         },[])

     // !!! Change to filter the stars and change star rendering to only filtered stars
     const handleClick = (data) => {
        alert(`You clicked: ${data}`);
      };
  
     return (
       <div className="box-container">
         <h2 className="box-title">Filter by Tag</h2>
         <div className="box-list">
         {data.map((dataPoint, index) => (
          <button 
            key={index} 
            className="box-button" 
            onClick={() => handleClick(data)}
          >
            {dataPoint.name}
          </button>
           ))}
         </div>
       </div>
     );
   };
  export default FilterTag;