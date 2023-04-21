import { ADD_FAV, REMOVE_FAV , FILTER , ORDER ,RESET} from './types'
import axios from 'axios'

export function addFav(character){
   return async function(dispatch){
        try {
            const {data} = await axios.post(
                "http://localhost:3001/rickandmorty/favorites", 
                //le pasa el personaje por body
                character
                //asi le devuelve el valor 
            )
            return dispatch({
                type:ADD_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
   }
}

export function removeFav(id){
    return async function(dispatch){
        try {
            const {data} = await axios.delete(
                `http://localhost:3001/rickandmorty/favorites/${id}`
            )
            return dispatch({
                type:REMOVE_FAV,
                payload: data,
            })
        } catch (error) {
            console.log(error);
        }
   }
}

export function filterCards(gender){
    return{
        type:FILTER,
        payload:gender
    }
}

export function orderCards(orden){
    return{
        type:ORDER,
        payload: orden
    }
}

export function reset(){
    return{
        type:RESET
    }
}