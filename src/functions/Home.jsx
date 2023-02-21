import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import axios from 'axios'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

export const Home = () => {

  const { theme } = useContext(GlobalContext)

  const [ img, setImg ] = useState([])
  const [ index, setIndex ] = useState(0)

  const apiMars = async () => {

  try{
    const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    console.log(res)

    const imgArray = res.data.map((e)=> e.url)
    console.log(imgArray)
    setImg(imgArray)

  }catch(e){
    console.log(e)
  }
}

const counter = (event) => {

  const btn = event.target.getAttribute('data-icon')

  if(btn === 'right'){
    setIndex(index+1)

    if(index == img.length-1){
      setIndex(0)
    }

  } else {
    setIndex(index-1)

    if(index <= 0){
      setIndex(img.length-1)
    }
  }
}

useEffect(()=>{
  apiMars()
},[])

  return (
    <div id='homePage' className={ theme }>
      <div id='carrousel' className={ theme }>
        <LeftOutlined id='left' onClick={counter} className={ theme }/>
        <img src={img[index]} id='imgRover'/>
        <RightOutlined id='right' onClick={counter} className={ theme } />
      </div>
    </div>
  )
}
