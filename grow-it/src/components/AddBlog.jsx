import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  console.log(`${BASE_URL}/blogs/`)
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
}
export default NewBlog
