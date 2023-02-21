import React, { useContext } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ListNews = () => {

  const [ news, setNews ] = useState([])
  const [ country, setCountry ] = useState('us')

  const { theme } = useContext(GlobalContext)

  const apiNews = async () => {

    try{
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=b5528777e86d4e829627bd7e843892fa`)

      res.data.articles.map((e, index)=>{
        if(!e.urlToImage  || e.urlToImage == undefined){
          console.log(e)
          console.log(index)
          res.data.articles.splice(index, 1)
        }
      })
      console.log(res.data.articles)
      setNews([...res.data.articles])

    } catch(e){
      console.log(e)
    }


  }

  useEffect(()=>{ 
    apiNews()
  },[country])

  return (
    <div id='listNewsPage' className={ theme }>
    <div id='filterNews'>
      <div id='country' onClick={()=>setCountry('au')}>Australia</div>
      <div id='country' onClick={()=>setCountry('fr')}>Francia</div>
      <div id='country' onClick={()=>setCountry('jp')}>Japan</div>
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
