import { NavLink } from 'react-router-dom'

const Nav = ()=>{
  return(
    <div>
    <NavLink className='nav_links' to='/'>Home</NavLink>
    <NavLink className='nav_links' to='/blog'>Add A Note</NavLink>
    </div>
  )
}
export default Nav 