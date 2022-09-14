import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import csrftoken from '../csrftoken'



const NewBlog =(props)=>{
  let navigate=useNavigate()
  const[newblog, setNewBlog]=useState([])
  const initialState = {
    title:'',
    body: ''
  }
  const [formState, setFormState] = useState(initialState)

  useEffect(()=>{
    const getBlogs= async()=>{
      try{
        let res= await axios.get(`${BASE_URL}/blogs/`)
        setNewBlog(res.data)
      }catch(eer){}
    }
    getBlogs()
  },[])
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    console.log(csrftoken)
    await axios({
      url:`${BASE_URL}blogs/`,
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
          <div class="grid gap-1 grid-cols-1 grid-rows-3">
            <div class="grid justify-items-stretch">
              <input
                type="text"
                id="title"
                onChange={handleChange}
                value={formState.title}
                class="h-10 w-1/3 rounded-lg justify-self-center self-center text-3xl placeholder:italic mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Enter a title..."
              />
            </div>
            <div class="grid justify-items-stretch">
            <textarea
              id="body"
              onChange={handleChange}
              value={formState.body}
              class="h-40 w-1/2 rounded-lg justify-self-center text-2xl placeholder:italic focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
              placeholder="Write a note..."
            />
            </div>
            <div class="grid justify-items-stretch">
              <button type="submit" class="bg-green-100 rounded-lg justify-self-center h-full w-1/2"><img src="https://www.freeiconspng.com/uploads/checkmark-png-5.png" class="object-scale-down h-20 mx-auto" /></button>
            </div>
          </div>
        </form>
    </div>
  )
}
export default NewBlog
