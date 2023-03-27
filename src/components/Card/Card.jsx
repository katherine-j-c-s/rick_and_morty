import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id,name,image,onClose}) {
  return (
    <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <button onClick={()=> onClose(id)}>X</button>
        <Link to={`/details/${id}`}>
            <p>ver detalles</p>
        </Link>
    </div>
  )
}
