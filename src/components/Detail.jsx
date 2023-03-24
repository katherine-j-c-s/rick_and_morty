import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState , useEffect} from 'react'

export default function Detail() {
  let [character,setCharacter] = useState()
  let [characterProps,setCharacterProps] = useState()
  const {id} = useParams()
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);
  function addProps(character) {
    return (
      <div>
        <h1>{character.name}</h1>
        <h1>{character.status}</h1>
        <h1>{character.species}</h1>
        <h1>{character.gender}</h1>
        <h1>{character.origin.name}</h1>
        <img src={character.image} alt={character.name} />
      </div>
    );
  }
  return (
    <div>
      {character !== undefined && JSON.stringify(character) !=='{}' ? addProps(character) : null}
    </div>
  )
}
