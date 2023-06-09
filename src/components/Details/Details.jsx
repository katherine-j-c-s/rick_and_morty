import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
import { useParams , Link } from 'react-router-dom';

export default function Details() {
    const {id} = useParams()
    let [character, setCharacter] = useState({})

    useEffect(() => {
      async function inEffect() {
         try {
            const {data} = await axios(`http://localhost:3001/rickandmorty/characters/detail/${id}`)
            if (data.name) {
               setCharacter(data);
            }else{
               window.alert('No hay personajes con ese ID');
            }
         } catch (error) {
            console.log("character update in useEffect in component Detail",error);
         }
      }
      inEffect()
      return setCharacter({})// cuando se desmonta queda como un obj vacio {}
     }, [id]);
  return (
    <div>
        <h1>Detalles:</h1>
        <Link to={'/home'}>
            <p>volver</p>
        </Link>
        <h2>Nombre: {character.name}</h2>
        <h2>Estado: {character.status}</h2>
        <h2>Especie: {character.species}</h2>
        <h2>Genero: {character.gender}</h2>
        <h2>Origen: {character.origin?.name}</h2>
        <img src={character.image} alt={character.name} />
    </div>
  )
}

