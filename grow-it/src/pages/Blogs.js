import { BASE_URL } from '../globals'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
    <div class="grid gap-1 grid-cols-3">
      <div>
        <NavLink to="/blog" class="col-end-4 col-span-1">
          <img
            src="https://img.icons8.com/color/2x/plus.png"
            alt="a bright green plus so you can add a plant"
            className="object-scale-down h-20 mx-auto"
          />
        </NavLink>
      </div>
      {blog.map((blog) => (
        <div
          class="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10 hover:bg-green-100"
          onClick={() => showBlogs(blog)}
          key={blog.id}
        >
          <h3 class="text-3xl font-semibold hover:font-bold">{blog.title}</h3>
          <p class="truncate hover:text-clip">{blog.body}</p>
          <h5>{blog.date}</h5>
        </div>
      ))}
    </div>
  )
}
export default Blogs
