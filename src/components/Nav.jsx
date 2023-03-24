import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Nav({onSearch}) {
  return (
    <div>
      <Link to="/about">
        <p>about</p>
      </Link>
      <Link to="/home">
        <p>home</p>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  )
}



