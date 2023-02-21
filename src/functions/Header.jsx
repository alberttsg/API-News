import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Components/Theme'

export const Header = () => {

  const navigate = useNavigate()

  const { theme } = useContext(GlobalContext)

  return (
    <div id='backgroundHeader'>
      <div id='header' className={ theme }>
        <div onClick={()=> navigate('/')} id='home' >Home</div>
        <div onClick={ () => navigate('/form')} id='form'>Form</div>
        <div onClick={ () => navigate('/news')} id='news' >News</div>
        <Theme/>
      </div>
    </div>
  )
}
