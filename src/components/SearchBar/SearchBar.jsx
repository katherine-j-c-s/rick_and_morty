import React from 'react'
import { useState } from 'react'

export default function SearchBar({onSearch}) {
  let [id,setid] =  useState("")
  function handleChange(event) {
    setid(event.target.value)
  }
  return (
    <div>
      <input type="search" name="search" placeholder='buscar personajes' value={id} onChange={handleChange} />
      <button onClick={()=>{setid(""); onSearch(id)}}>agregar</button>
    </div>
  )
}
