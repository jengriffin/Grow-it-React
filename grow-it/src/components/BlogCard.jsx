import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import csrftoken from '../csrftoken'
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
  const deleteBlog = async () => {
    let res = await axios.delete(`${BASE_URL}blogs/${id}`, formState)
    alert('You have successfully deleted the note!')
    navigate('/')
  }


return(
  <div className="form ">
  <form onSubmit={handleSubmit}>
  <div class="grid gap-1 grid-cols-1 grid-rows-3">
    <div class="grid justify-items-center text-3xl">
  <h1>{blog.title}</h1>
  <div class="text-2xl">
  <h2>{blog.body}</h2>
  </div>
  
  <input
    type="text"
    id="title"
    onChange={handleChange}
    value={formState.title}
    class="h-10 w-1/3 rounded-lg justify-self-center self-center text-.5xl placeholder:italic mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
    placeholder="New title..."
  />
  </div>
  <div class="grid justify-items-stretch">
  
  <textarea
    id="body"
    onChange={handleChange}
    value={formState.body}
    class="h-40 w-1/2 rounded-lg justify-self-center text-.5xl placeholder:italic focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
    placeholder="Update your note..."
  /> <div></div>
  <div class="grid gap-3 grid-cols-2 grid-rows-3">
  <button type="submit"class="bg-green-100 rounded-lg justify-self-center h-full w-1/2">Update</button>
  
  <button onClick={deleteBlog}class="bg-green-100 rounded-lg justify-self-center h-full w-1/2">Delete Note</button>
  
  </div>
  </div>
  </div>
  </form>
  </div>
)



}
export default BlogCard