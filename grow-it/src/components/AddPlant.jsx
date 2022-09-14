import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import csrftoken from '../csrftoken'



const NewPlant = (props) => {
  let navigate = useNavigate()

  const [newplant, setNewPlant] = useState([])
  const [uploadFile, setUploadFile] = useState("");

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
        setNewPlant(res.data)
      }catch(eer){}
    }
    getPlants()
  },[])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form_data = new FormData();
    form_data.append('image', uploadFile);
    form_data.append('name', formState.name);
    form_data.append('info', formState.info);

    await axios({
      url:`${BASE_URL}plants/`,
      method:'POST',
      data: form_data,
      headers: {
        'Content-Type': 'multipart/form-data',
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
        <h1 class="text-center text-3xl">Add a Plant!</h1>
        <div class="grid justify-items-stretch">
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
          placeholder="Name"
          class="h-10 w-1/3 rounded-lg justify-self-center self-center text-3xl placeholder:italic mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        />
        </div>
        
        <input type="file" class="h-20 w-1/2 rounded-lg 
        justify-self-center text-1xl 
        hover:file:bg-green-100
        file:font-semibold
        file:border-0
        file:rounded-full" 
        onChange={(e) => setUploadFile(e.target.files[0])} />

        
        <textarea
          id="info"
          onChange={handleChange}
          value={formState.info}
          class="h-40 w-1/2 rounded-lg justify-self-center
          text-2xl placeholder:italic 
          focus:outline-none focus:border-sky-500 
          focus:ring-sky-500 focus:ring-1"
          placeholder='Info'
        />
        <div class="grid justify-items-stretch">
          <button type="submit" class="bg-green-100 rounded-lg justify-self-center h-full w-1/2 "><img src="https://www.freeiconspng.com/uploads/checkmark-png-5.png" class="object-scale-down h-20 mx-auto"/></button>
        </div>
        </div>
      </form>
  </div>
)
}
export default NewPlant