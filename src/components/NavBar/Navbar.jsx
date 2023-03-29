import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar({onSearch ,logOut}) {
  return (
    <div>
        <Link to={'./home'}>
          <p>home</p>
        </Link>
        <SearchBar onSearch = {onSearch}></SearchBar>
        <Link to={"/favorites"}>
          <p>Favoritos</p>
        </Link>
        <button onClick={logOut}>LogOut</button>
    </div>
  )
}
