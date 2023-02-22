import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const Footer = () => {

  const navigate = useNavigate()
  const { theme } = useContext(GlobalContext)

  return (
    <div id='footer' className={ theme }>
      <div id='footerRouter'>
        <div id='home' onClick={()=>navigate('/')}>Home</div>
        <div id='form' onClick={()=>navigate('/form')}>Form</div>
        <div id='news' onClick={()=>navigate('/news')}>News</div>
      </div>
      <div id='footerSubscribe'>
        <input type='text' placeholder='Enter you email' id='inputFooter'/>
        <div id='footerSubscribe'>Subscribe</div>
      </div>

    </div>
  )
}
