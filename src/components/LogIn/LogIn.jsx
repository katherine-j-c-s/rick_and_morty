import React from 'react';
import './Login.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function LogIn({login}) {

   const navigate = useNavigate();
   let [inputs,setInputs] = useState({
        email:"",
        password:"",
   })

   let [error,setError] = useState({
        email:"",
        password:"",
    })

    function validate(i) {
        let errors = {};
        if (!i.email) {
           errors.email = "debe haber un email";
        }
        else if (!i.password) {
            errors.password = "debe hacer un password";
        }
        else if(!regexEmail.test(i.email)){
            errors.email = "debe ser un email valido";
        }
        else if (i.password.length < 8){
            errors.password = "deber tener al menos 8 caracteres"
        }
        return errors
    }

    function handleinput(event) {
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
        setError(
            validate({
                ...inputs,
                [event.target.name]:event.target.value
            })
        )
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (Object.keys(error).length === 0) {
            setInputs({
                email:"",
                password:"",
           })
           setError({
                email:"",
                password:"",
            })
            login(inputs)
            navigate('/miUsurio');
        }
    }
    return(
        <div className='containerLogin'>
            <form className='bokLogin' onSubmit={handleSubmit}>
                <input 
                type="text"
                value={inputs.email}
                className='inputsLogin'
                name="email"
                placeholder='agrege su email'
                onChange={handleinput} />
                <p className='errorLogin'>{error.email}</p>
                <input 
                type="text"
                value={inputs.password}
                className='inputsLogin'
                name="password"
                placeholder='agrege su contraseña'
                onChange={handleinput} />
                <p className='errorLogin'>{error.password}</p>
                <button className="btnLogin" type="submit">Ingresar</button>
            </form>
        </div>
    )
}
