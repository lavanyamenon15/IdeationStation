import { useState } from 'react';
import './FilterTag.css';


function FilterTag() {
   const items = [
       "Art",
       "History",
       "Law"
     ];
  
     return (
       <div className="box-container">
         <h2 className="box-title">Filter by Tag</h2>
         <ul className="box-list">
           {items.map((item, index) => (
             <li key={index} className="box-item">{item}</li>
           ))}
         </ul>
       </div>
     );
   };
  export default FilterTag;