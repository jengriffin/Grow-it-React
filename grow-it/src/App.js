import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Nav from './components/nav'
import Blogs from './pages/Blogs'
import { Register } from './pages/Register'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  )
}

export default App
