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
        console.log(res.data)
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
        <h1>Add a Plant!</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="image">Picture:</label>

        <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />

        <label htmlFor="info">Info:</label>
        <textarea
          id="info"
          onChange={handleChange}
          value={formState.info}
          
        />
        <div>
          <button type="submit"><img src="https://www.freeiconspng.com/uploads/checkmark-png-5.png" /></button>
        </div>
      </form>
  </div>
)
}
export default NewPlant