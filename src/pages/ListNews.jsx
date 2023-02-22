import React, { useContext } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ListNews = () => {

  const [ news, setNews ] = useState([])
  const [ country, setCountry ] = useState('us')
  const [clas, setClas ] = useState('eeuu')

  const { theme } = useContext(GlobalContext)

  const apiNews = async () => {

    try{
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=b5528777e86d4e829627bd7e843892fa`)

      const resFiltered = res.data.articles.filter((element)=> element.urlToImage !== null)

      setNews([...resFiltered])

    } catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    apiNews()
  },[country])

  return (
    <div id='listNewsPage' className={ theme }>
    <div id='filterNews'  className={ theme }>
    <button id='countryEeuu' onClick={()=>setCountry('us')} onFocus={()=>setClas('eeuu')} onBlur={()=>setClas('')} className={clas}>EEUU</button>
      <button id='countryAus' onClick={()=>setCountry('au')} onFocus={()=>setClas('aus')} onBlur={()=>setClas('')} className={clas} >Australia</button>
      <button id='countryFr' onClick={()=>setCountry('fr')} onFocus={()=>setClas('fr')} onBlur={()=>setClas('')} className={clas}>Francia</button>
      <button id='countryJpn' onClick={()=>setCountry('jp')} onFocus={()=>setClas('jpn')} onBlur={()=>setClas('')} className={clas}>Japan</button>
    </div>
      <div id='listNews' className={ theme }>{news.map((e, index)=>(
        <div id='newsPainting' className={ theme } key={index}>
        <div key={`title${index}`} className={ theme } id='title'>{e.title}</div>
        <img src={e.urlToImage}  id='img'/>
        <div key={`description${index}`} className={ theme } id='description'>{e.description}</div>
        </div>
      ))
      }</div>
    </div>
  )
}
