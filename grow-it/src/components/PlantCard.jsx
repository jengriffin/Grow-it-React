import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import csrftoken from '../csrftoken'
import { useNavigate } from 'react-router-dom'
const PlantCard =(props) =>{
  const navigate=useNavigate()
  const [plant, setPlant] = useState([])
  const [uploadFile, setUploadFile] = useState("");

  const initialState = {
    name:'',
    image: '',
    info: ''
  }
  const [formState, setFormState] = useState(initialState)

  let { id } = useParams()

  useEffect(()=>{
    const getPlants= async()=>{
      try{
        let res= await axios.get(`${BASE_URL}plants/${id}`)
        console.log(res.data)
        setPlant(res.data)
      }catch(eer){}
    }
    getPlants()
  },[])

  const handleChange = (event) => {
    console.log(event)
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    const form_data = new FormData();
    form_data.append('image', uploadFile);
    form_data.append('name', formState.name);
    form_data.append('info', formState.info);
    event.preventDefault()
    console.log(formState)
    console.log(csrftoken)
    await axios({
      url:`${BASE_URL}plants/${id}`,
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
  const deletePlant = async () => {
    let res = await axios.delete(`${BASE_URL}plants/${id}`, formState)
    alert('You have successfully deleted the plant!')
    navigate('/')
  }


return(
  <div className="form ">
  <form onSubmit={handleSubmit}>
  <div class="grid gap-1 grid-cols-1 grid-rows-3">
    <div class="grid justify-items-center text-3xl">
  <h1>{plant.name}</h1>
  <div >
  <img src={plant.image}/>
  <h3>{plant.info}</h3>
  
  </div>

  <input
    type="text"
    id="title"
    onChange={handleChange}
    value={formState.name}
    class="h-10 w-1/3 rounded-lg justify-self-center self-center text-.5xl placeholder:italic mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
    placeholder="New name..."
  />
  </div>
  <div class="grid justify-items-stretch">
  
  <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
  </div>
  <div class="grid gap-3 grid-cols-2 grid-rows-3">
  <button type="submit"class="bg-green-100 rounded-lg justify-self-center h-full w-1/2">Update</button>
  
  <button onClick={deletePlant}class="bg-green-100 rounded-lg justify-self-center h-full w-1/2">Delete Plant</button>
  
  </div>
  </div>
  </form>
  </div>
)
}
export default PlantCard