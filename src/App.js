import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import { Route , Routes } from 'react-router-dom';

import Cards from './components/Cards.jsx';
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'

function App() {
   const [characters,setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      setCharacters((oldChars) => {
         return oldChars.filter((ch)=>ch.id !== id)
      });
   }
   return (
      <div className='App'>
         <Nav className="nav" onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/detail/:id' element={<Detail></Detail>}></Route>
         </Routes>
         
         
      </div>
   );
}

export default App;
