import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar({onSearch ,logOut}) {
  return (
    <div>
        <SearchBar onSearch = {onSearch}></SearchBar>
        <button onClick={logOut}>LogOut</button>
    </div>
  )
}
