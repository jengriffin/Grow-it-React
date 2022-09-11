import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { NavLink } from 'react-router-dom'

const PlantList = () => {
  const [plant, setPlant] = useState([])

  console.log(`${BASE_URL}plants/`)
  useEffect(() => {
    const getPlants = async () => {
      let res = await axios.get(`${BASE_URL}plants/`)

      console.log(res)
      setPlant(res.data)
    }
    getPlants()
  }, [])
  return (
    <div>
      <div>
        <NavLink to="/plant">+</NavLink>
      </div>
      {plant.map((plant) => (
        <div key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
        </div>
      ))}
    </div>
  )
}
export default PlantList
