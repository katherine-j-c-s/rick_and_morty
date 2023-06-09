import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from './actions/types'

const initialState = {
    myFavorites:[],
    myFavoritesOrigin:[],
}

const rootReducer = (state=initialState, {type,payload})=>{
    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: payload,
                myFavoritesOrigin: payload,
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: payload,
                myFavoritesOrigin: payload,
            }
        case FILTER:
            const stateFilted = state.myFavoritesOrigin.filter((chr)=>chr.gender === payload)
            return{
                ...state,
                myFavorites: stateFilted,
            }
        case RESET:
            return{
                ...state,
                myFavorites:[...state.myFavoritesOrigin]
            }
        case ORDER:
            var stateOrded
            if (payload === "Ascendente") {
                stateOrded = state.myFavoritesOrigin.sort((a,b) => a.id - b.id)
            }else if (payload === "Descendente") {
                stateOrded = state.myFavoritesOrigin.sort((a,b) => b.id - a.id)
            }
            return{
                ...state,
                myFavorites: stateOrded
            }
        default:
            return state
    }
}

export default rootReducer;