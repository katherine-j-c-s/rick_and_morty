import './styleCard.css'
import { Link } from 'react-router-dom';

export default function Card({id,name,status,species,gender,origen,image,onClose}) {
   return (
      <div className="cardContainer">
         <div className='cardInfo'>
            <div className='nameBtn'>
               <Link to={`/detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
               <button className="BtnCard" onClick={()=>onClose(id)}>X</button>
            </div>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origen}</h2>
         </div>
         <img src={image} alt={name}/>
      </div>
   );
}
