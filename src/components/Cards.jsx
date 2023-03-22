import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Card from './Card';
import './styleCard.css'
export default function Cards({characters, onClose}) {
   return (
      <div className='cardsContainer'>
         {characters && // y como hiciste?
            characters.map((element,index)=>{
               return (
                  <Card 
                     key={index}
                     id={element.id}
                     name={element.name}
                     status={element.status}
                     species={element.species}
                     gender={element.gender}
                     origin={element.origin.name}
                     image={element.image}
                     onClose={onClose}
                  ></Card>
               );
            })
         }
      </div>
   ) 
}
