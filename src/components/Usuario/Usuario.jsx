import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import axios from 'axios'
import './Usuario.css'
import Imagenes from './Imagenes/Imagenes'

export default function Usuario() {

    const navigate = useNavigate();

    let [error,setError] = useState({
        name:"",
        img:"",
    })
    let [imagenes,setImagenes] = useState([])
    let [nombre,setNombre] = useState("")
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character`).then(({ data }) => {
           data.results.map((el)=>{
            setImagenes(()=>imagenes=[...imagenes,el.image])
           })
        });
    }, []);

    function imagenSelected(img) {
        setImagenes(imagenes.filter((i)=> i === img ))
    }

    function handleChange(event) {
        setNombre(event.target.value);
    } 

    function handleSubmit(e) {
        e.preventDefault()
        if (!nombre) {
            setError({
                ...error,
                name: "tiene que haber un nombre"
            })
        }
        if (imagenes.length !== 1) {
            setError({
                ...error,
                img: "tienes que escoger un personaje"
            })
        }
        if (nombre && imagenes.length === 1) {
            navigate('/home')
        }
    } 
  return (
    <div>
        <h1>mi usuario</h1>
        <form onSubmit={handleSubmit}>
            <p>nombre:</p>
            <input type="text" name='nombre' value={nombre} onChange={handleChange} />
            <p>{error.name}</p>
            <p>escoge imagen de usario:</p>
            <p>{error.img}</p>
            {imagenes &&
                imagenes.map((img, i)=>{
                    return(
                        <Imagenes imagenSelected={imagenSelected} key={i} img={img}></Imagenes>
                    )
                })
            }
            <button type="submit">seguir</button>
        </form>
        
    </div>
  )
}
