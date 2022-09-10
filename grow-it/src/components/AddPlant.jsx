import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import csrftoken from '../csrftoken'



const NewPlant=(props)=>{
  let navigate=useNavigate()
  const[newplant, setNewPlant]=useState([])
  const initialState = {
    name:'',
    image: '',
    info: ''
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(()=>{
    const getPlants= async()=>{
      try{
        let res= await axios.get(`${BASE_URL}plants`)
        console.log(res.data)
        setNewPlant(res.data)
      }catch(eer){}
    }
    getPlants()
  },[])
  const handleChange = (event) => {
    console.log(event)
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    console.log(csrftoken)
    await axios({
      url:`${BASE_URL}plants/`,
      method:'POST',
      data: formState,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
        'X-Requested-With': 'XMLHttpRequest', 
      },
      
    })
    setFormState(initialState)
    navigate('/')
  }
  

console.log(`${BASE_URL}plants/`)

return(
  <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Add a Plant!</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="image">Picture:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.image}
        />
        <label htmlFor="info">Info:</label>
        <textarea
          id="info"
          onChange={handleChange}
          value={formState.info}
        /> <div>
        <button type="submit"><img src="https://www.freeiconspng.com/uploads/checkmark-png-5.png" /></button>
      </div>
        </form>
  </div>
)
}
export default NewPlant
