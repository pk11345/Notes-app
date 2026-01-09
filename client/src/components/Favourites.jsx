import React from 'react'
import { useSelector } from 'react-redux'

const Favourites = () => {
   const noteid = JSON.parse(localStorage.getItem("fav"))
  return (
    <>
    <div className='text-white '>Favourites, {noteid}</div>
    </>
  )
}

export default Favourites