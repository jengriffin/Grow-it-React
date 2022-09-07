import { axios } from 'axios'
import { useEffect, UseState } from 'react'
import { BASE_URL } from '../globals'

const Home = (props) => {
  const [plant, setPlant] = UseState('')

  useEffect(() => {
    const getPlants = async () => {
      let res = await axios.get(`${BASE_URL}plants/`)
      setPlant(res.data)
    }
    getPlants()
  }, [props.recipe])
  return (
    <div>
      {plant.map((plant) => (
        <div>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
        </div>
      ))}
    </div>
  )
}
export default Home
