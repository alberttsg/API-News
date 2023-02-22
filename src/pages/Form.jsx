import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Form = () => {

  const { theme } = useContext(GlobalContext)

  const navigate = useNavigate()

  const handleChangeInput = (e) =>{
    e.preventDefault()
    const data = new FormData(inputsForm)

    localStorage.setItem('formData', data)

    navigate('/news')

  }

  return (
    <div id='formComponent' className={ theme }>
      <form id='inputsForm' className={ theme } onSubmit={ handleChangeInput }>
        <input id='input' type='text' name='title' placeholder='Titular' />
        <textarea id='textArea' name='textArea' placeholder='Noticia' />
        <input type='submit' id='submitBtn' className={ theme } />
      </form>
    </div>
  )
}
