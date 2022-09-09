import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CSRFTOKEN from '../csrftoken'



const NewBlog =(props)=>{
  let navigate=useNavigate()
  const[newblog, setNewBlog]=useState([])
  const initialState = {
    plants:'',
    date:'',
    body: ''
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(()=>{
    const getBlogs= async()=>{
      try{
        let res= await axios.get(`${BASE_URL}/blogs/`)
        console.log(res.data)
        setNewBlog(res.data)
      }catch(eer){}
    }
    getBlogs()
  },[])
  const handleChange = (event) => {
    console.log(event)
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await axios.post(`${BASE_URL}blogs/`, formState)
    console.log(res)
    
    setFormState(initialState)
    navigate('/')
  }
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
return(
  <div className="form">
      <form onSubmit={handleSubmit}>
      <CSRFTOKEN />
        <h1>New Note</h1>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.title}
        />
        <label htmlFor="date">Date:</label>
        <input type="date" 
          onChange={handleChange}
          value={formState.date}
          id = "date"
          
        />
        <label>Plant:</label>
        <select id='plant'>
        {plant.map((plant) => (
          <option 
          key={plant.id}
          value= {plant.name}
          >
        {plant.name}</option>))}
        </select>
        <label htmlFor="body">Type Here:</label>
        <textarea
          id="body"
          onChange={handleChange}
          value={formState.body}
        /> <div>
        <button type="submit">Submit</button>
      </div>
        </form>
  </div>
)
}
export default NewBlog
