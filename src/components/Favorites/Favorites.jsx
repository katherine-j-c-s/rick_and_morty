import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

export default function Favorites({onClose}) {
  
    const favorites = useSelector((st)=> st.myFavorites)

    return (
    <div>
        {favorites?.map((f,i)=>{
            return(
                <Card
                    key={i}
                    id={f.id}
                    name={f.name}
                    image={f.image}
                    onClose={onClose}
                ></Card>
            )
        })}
    </div>
  )
}
