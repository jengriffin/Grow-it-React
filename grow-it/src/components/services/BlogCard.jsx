import { BASE_URL } from '../../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import csrftoken from '../../csrftoken'
import { useNavigate } from 'react-router-dom'
const BlogCard =()=>{
  const[blog, setBlog]=useState([])
  let navigate= useNavigate()

  const initialState = {
    title:'',
    body: ''
  }
  const [formState, setFormState] = useState(initialState)

  let { id } = useParams()

  useEffect(() => {
    const selectedBlog = async () => {
      try {
        let res = await axios.get(`${BASE_URL}blogs/${id}`)
        setBlog(res.data)
      } catch (eer) {
      }
    }
    setBlog(selectedBlog)
  }, [])

  const handleChange = (event) => {
    console.log(event)
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    console.log(csrftoken)
    await axios({
      url:`${BASE_URL}blogs/${id}`,
      method:'PUT',
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
  const [plant, setPlant] = useState([])


return(
  <div className="form">
  <form onSubmit={handleSubmit}>
  <h1>Update Note</h1>
  <label htmlFor="title">Title:</label>
  <input
    type="text"
    id="title"
    onChange={handleChange}
    value={formState.title}
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
export default BlogCard