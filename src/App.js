import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { Route , Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions/actions';

import LogIn from './components/LogIn/LogIn.jsx';
import Navbar from './components/NavBar/Navbar';
import Cards from './components/Cards/Cards';
import Details from './components/Details/Details';
import Usuario from './components/Usuario/Usuario';
import Favorites from './components/Favorites/Favorites'

function App() {
   const [characters,setCharacters] = useState([])
   let currentLocation = useLocation();
   let navigate = useNavigate()
   const dispatch = useDispatch()

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id)  {
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=>ch.id !== id)
      });
      dispatch(removeFav(id))
   }
   function logOut() {
      navigate('/')
   }
   return (
      <div className='App'>
         { currentLocation.pathname === "/" ? null :  currentLocation.pathname === "/miUsurio" ? null  : <Navbar logOut={logOut} onSearch={onSearch}></Navbar>}
         <Routes>
            <Route path='/' element = {<LogIn></LogIn>}/>
            <Route path='/miUsurio/' element={<Usuario></Usuario>}/>
            <Route path='/home' element ={<Cards characters={characters} onClose={onClose}></Cards>}/>
            <Route path='/details/:id' element={<Details characters={characters}></Details>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}></Favorites>}/>
         </Routes>
         {}
      </div>
   );
}

export default App;
