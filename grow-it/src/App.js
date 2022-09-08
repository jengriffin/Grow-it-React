import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Nav from './components/nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
