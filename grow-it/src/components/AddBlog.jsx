import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


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
    let res = await axios.post(`${BASE_URL}/blogs/`, formState)
    setFormState(initialState)
    navigate('/home')
  }
return(
  <div className="form">
      <form onSubmit={handleSubmit}>
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
          // placeholder= "YYYY/MM/DD"
        />
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
