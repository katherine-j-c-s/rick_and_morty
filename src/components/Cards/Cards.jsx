import React from 'react'
import Card from '../Card/Card'

export default function ({characters,onClose}) {
  console.log(characters)
    return  (
     <div>
        {characters && 
            characters.map((el,i)=>{
                return(
                    <Card
                    key={i}
                    id={el.id}
                    name={el.name}
                    image={el.image}
                    onClose={onClose}
                    ></Card>
                )
            })
        }
     </div>
    )
}
