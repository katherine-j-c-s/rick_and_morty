import React from 'react'
import Card from '../Card/Card'

export default function ({characters,onClose}) {
    return  (
     <div>
        {characters && 
            characters.map((el,i)=>{
                return(
                    <Card
                    key={i}
                    id={el.id}
                    name={el.name}
                    gender={el.gender}
                    image={el.image}
                    onClose={onClose}
                    ></Card>
                )
            })
        }
     </div>
    )
}
