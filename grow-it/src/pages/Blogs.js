import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Blogs = (props) => {
  let navigate = useNavigate()
  const [blog, setBlogs] = useState([])

  const showBlogs = (blog) => {
    navigate(`/blogs/${blog.id}`)
  }

  console.log(`${BASE_URL}blogs/`)
  useEffect(() => {
    const getBlogs = async () => {
      let res = await axios.get(`${BASE_URL}blogs/`)

      console.log(res)
      setBlogs(res.data)
    }
    getBlogs()
  }, [props.blog])
  return (
    <div>
      {blog.map((blog) => (
        <div
          className="recipe_grid"
          onClick={() => showBlogs(blog)}
          key={blog.id}
        >
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
