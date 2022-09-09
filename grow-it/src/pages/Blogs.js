import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Blogs = () => {
  const [blog, setBlogs] = useState([])

  console.log(`${BASE_URL}blogs/`)
  useEffect(() => {
    const getBlogs = async () => {
      let res = await axios.get(`${BASE_URL}blogs/`)

      console.log(res)
      setBlogs(res.data)
    }
    getBlogs()
  }, [])
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
          <h5>{blog.date}</h5>
        </div>
      ))}
      <h1>Werk!</h1>
    </div>
  )
}
export default Blogs
