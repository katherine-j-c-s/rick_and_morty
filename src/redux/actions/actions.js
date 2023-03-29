import { ADD_FAV, REMOVE_FAV } from './types'

export function addFav(chr){
    return{
        type:ADD_FAV,
        payload: chr
    }
}

export function removeFav(id){
    return{
        type:REMOVE_FAV,
        payload: id
    }
}