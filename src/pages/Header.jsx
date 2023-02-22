import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../Components/Theme'

export const Header = () => {

  const navigate = useNavigate()

  const [ sub, setSub ] = useState('')

  const { theme } = useContext(GlobalContext)


  return (
    <div id='backgroundHeader' className={ theme }>
      <div id='header' className={ theme }>
        <button onClick={()=> navigate('/')} onFocus={()=>setSub('homeBold')} onBlur={()=>setSub('')} className={ sub } id='home' >Home</button>
        <button onClick={ () => navigate('/form')}  onFocus={()=>setSub('formBold')} onBlur={()=>setSub('')} className={ sub } id='form'>Form</button>
        <button onClick={ () => navigate('/news')}  onFocus={()=>setSub('newsBold')} onBlur={()=>setSub('')} className={ sub } id='news' >News</button>
        <Theme/>
      </div>
    </div>
  )
}
