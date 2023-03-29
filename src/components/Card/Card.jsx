import React from 'react'
import { useState ,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {addFav, removeFav} from '../../redux/actions/actions'
import { useSelector ,useDispatch} from 'react-redux'

export default function Card(props) {
  
  const {id,name,image,onClose,gender} = props
  let [isFav,setIsFav] = useState(false)

  const favorites = useSelector((st)=> st.myFavorites)
  const dispatch = useDispatch()
  
  function handleFavorite() {
    if (isFav) {
      setIsFav(false)
      dispatch(removeFav(id))
    }else {
      setIsFav(true)
      dispatch(addFav(props))
    }
  }

  useEffect(() => {
    favorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [favorites]);
  
  return (
    <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <button onClick={()=> onClose(id)}>X</button>
        {isFav ? (
              <button onClick={handleFavorite}>❤️</button>
          ) : (
              <button onClick={handleFavorite}>🤍</button>
          )
        }
        <Link to={`/details/${id}`}>
            <p>ver detalles</p>
        </Link>
    </div>
  )
}
