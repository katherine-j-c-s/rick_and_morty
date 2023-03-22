import './styleCard.css'

export default function Card({id,name,status,species,gender,origen,image,onClose}) {
   return (
      <div className="cardContainer">
         <div className='cardInfo'>
            <button className="BtnCard" onClick={()=>onClose(id)}>X</button>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origen}</h2>
         </div>
         <img src={image} alt={name}/>
      </div>
   );
}
