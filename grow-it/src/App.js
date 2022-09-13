import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Nav from './components/nav'
import Blogs from './pages/Blogs'
import PostDelete from './pages/PostDelete'
import PlantList from './pages/PlantList'
import Plant from './pages/Plant'
import PlantDelete from './pages/PlantDelete'
// import { Register } from './pages/Register'

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<PostDelete />} />
          <Route path="/plants" element={<PlantList />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/plants/:id" element={<PlantDelete />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
