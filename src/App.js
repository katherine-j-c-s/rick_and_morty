import React, {useState, useEffect} from 'react';
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
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();
   let currentLocation = useLocation();
   const dispatch = useDispatch()

   const EMAIL = 'kathijcs@gmail.com';
   const PASSWORD = '12345678';
   

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/characters/${id}`).then(({ data }) => {
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
   function login(input) {
      axios.get(`http://localhost:3001/rickandmorty/login?email=${input.email}&password=${input.password}`)
      .then(({data})=>{
         if (data.access) {
            setAccess(true);
            navigate('/home');
         }
      })
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function logOut() {
      axios.get(`http://localhost:3001/rickandmorty/login?email=hola&password=estamal`)
      .then(({data})=>{
         if (!data.access) {
            setAccess(false);
            navigate('/');
         }
      })
   }
   return (
      <div className='App'>
         { currentLocation.pathname === "/" ? null :  currentLocation.pathname === "/miUsurio" ? null  : <Navbar logOut={logOut} onSearch={onSearch}></Navbar>}
         <Routes>
            <Route path='/' element = {<LogIn login={login}></LogIn>}/>
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
