import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Nav from './components/nav'
import { Register } from './pages/Register'

function App() {
  // const [user, setUser] = useState()
  // const [authToken, setAuthToken] = useState()
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const handleLogOut = () => {
  //   //Reset all auth related state and clear localStorage
  //   setUser(null)
  //   setAuthToken(null)
  //   setIsLoggedIn(false)
  //   localStorage.removeItem('token_access')
  //   localStorage.removeItem('token_refresh')
  // }

  // const checkSession = async (token) => {
  //   let csrfToken = decodeURIComponent(document.cookie)
  //   let tokenObj = {
  //     token: token.access,
  //     headers: {
  //       'X-Requested-With': 'XMLHttpRequest',
  //       'X-CSRFToken': getCookie(csrfToken),
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   let userSession = await checkToken(tokenObj)
  //   if (!userSession) {
  //     tokenObj = {
  //       token: token.refresh,
  //       headers: {
  //         'X-Requested-With': 'XMLHttpRequest',
  //         'X-CSRFToken': getCookie(csrfToken),
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     userSession = await refreshToken(tokenObj)
  //   }
  //   setUser(userSession)
  //   setIsLoggedIn(true)
  //   //If a token exists, sends token to localStorage to persist logged in user
  // }

  // useEffect(() => {
  //   const checkTokenStatus = async () => {
  //     let token = {
  //       access: localStorage.getItem('token_access'),
  //       refresh: localStorage.getItem('token_refresh')
  //     }
  //     if (token) {
  //       checkSession(token)
  //     }
  //   }
  //   checkTokenStatus()
  // }, [isLoggedIn])

  // function getCookie(name) {
  //   let cookieValue = null
  //   if (document.cookie && document.cookie !== '') {
  //     let cookies = document.cookie.split(';')
  //     cookieValue = cookies[0].toString()
  //     cookieValue = cookieValue.substring(10, cookieValue.length)
  //   }
  //   return cookieValue
  // }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
