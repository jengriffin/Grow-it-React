import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button className="bg-green-100 rounded-lg justify-self-center h-full w-1/2">
        <img
          src="https://img.icons8.com/stickers/344/natural-food.png"
          alt="a cheery little set of leaves"
          className="object-scale-down h-20 mx-auto"
        />
      </button>

      <button
        className="bg-green-100 rounded-lg justify-self-center h-full w-1/2"
        onClick="console.log(click)"
      >
        <img
          src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-notebook-press-and-media-flaticons-lineal-color-flat-icons.png"
          alt="a small terracotta spiral note book sitting closed under an orange pen waiting to be used"
          className="object-scale-down h-20 mx-auto"
        />
      </button>
    </div>
  )
}
export default Home
