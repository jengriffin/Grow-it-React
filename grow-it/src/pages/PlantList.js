import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const PlantList = () => {
  const [plant, setPlant] = useState([])
  let navigate = useNavigate()
  const showPlant = (plants) => {
    navigate(`/plants/${plants.id}`)
  }

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
        <NavLink to="/plant" class="grid justify-items-right">
          <img
            src="https://img.icons8.com/color/2x/plus.png"
            alt="a bright green plus so you can add a plant"
          />
        </NavLink>
      </div>
      {plant.map((plant) => (
        <div
          key={plant.id}
          onClick={() => showPlant(plant)}
          class="grid justify-items-center text-2xl"
        >
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
        </div>
      ))}
    </div>
  )
}
export default PlantList
