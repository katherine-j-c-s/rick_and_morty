import React, {useState} from "react";
import "./styleSearch.css";
export default function SearchBar({ onSearch }) {
   let [id,setId]= useState("")
   function HandleChange(event) {
      setId(event.target.value);
   }
   return (
      <div className="searchContainer">
         <input 
         type='search'
         name='search'
         onChange={HandleChange}
         value={id} 
         />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
