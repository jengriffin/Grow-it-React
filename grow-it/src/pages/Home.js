import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'

const Home = (props) => {
  const [plant, setPlant] = useState('')

  console.log(`${BASE_URL}plants/`)
  useEffect(() => {
    const getPlants = async () => {
      let res = await axios.get('http://127.0.0.1:8000/plants/')

      console.log(res)
      setPlant(res.data)
    }
    getPlants()
  }, [])
  return (
    <div>
      <div>
        <img src={plant.image} alt={plant.name} />
        <h3>{plant.name}</h3>
      </div>

      <h1>Werk!</h1>
    </div>
  )
}
export default Home
