import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Nav from './components/nav'
import Blogs from './pages/Blogs'
import PostDelete from './pages/PostDelete'
// import { Register } from './pages/Register'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<PostDelete />} />
      </Routes>
    </div>
  )
}

export default App
