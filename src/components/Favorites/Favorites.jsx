import React from 'react'
import { filterCards, orderCards, reset } from '../../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/Card'

export default function Favorites({onClose}) {
  
    const dispatch = useDispatch()
    const {myFavorites} = useSelector((st)=> st)

    function handleOrder(e){
        e.preventDefault()
        const {value} = e.target
        dispatch(orderCards(value))
    }
    
    function handleFilter(e){
        e.preventDefault()
        const {value} = e.target
        dispatch(filterCards(value)) 
    }

    function resertbtn() {
        dispatch(reset())
    }

    return (
    <div>
        <select name='order' defaultValue={"DEFAULT"} onChange={handleOrder}>
            <option  value="DEFAULT" disabled>
                Select Order
            </option>
            <option  value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select name='filter' defaultValue={"DEFAULT"} onChange={handleFilter}>
            <option value="DEFAULT" disabled>
                Select Filter
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <button onClick={resertbtn}>reset</button>
        {myFavorites?.map((f,i)=>{
            return(
                <Card
                    key={i}
                    id={f.id}
                    name={f.name}
                    image={f.image}
                    onClose={onClose}
                ></Card>
            )
        })}
    </div>
  )
}
