import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { Button } from '../Components/Button'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Form = () => {

  const { theme } = useContext(GlobalContext)

  //const formData = new FormData(inputsForm)

  const [ form, setForm ] = useState({ })

  const navigate = useNavigate()

  const handleChangeInput = (e) =>{
    console.log(e.target.value)
    const inputValue = e.target.value
    setForm({...form, inputValue })
    console.log(form)
    localStorage.setItem('title', inputValue);
  }

  const handleChangeTextArea = (e) =>{
    console.log(e.target.value)
    const textAreaValue = e.target.value
    setForm({...form, textAreaValue })
    console.log(form)
    localStorage.setItem('noticia', textAreaValue);
  }

  return (
    <div id='formComponent' className={ theme }>
      <form id='inputsForm' className={ theme }>
        <input id='input' placeholder='Titular' onChange={ handleChangeInput }/>
        <textarea id='textArea' placeholder='Noticia' onChange={ handleChangeTextArea }/>
        <Button id='submitBtn' className={ theme } onClick={ () => navigate('/news')} children= 'Enviar' />
      </form>
    </div>
  )
}
