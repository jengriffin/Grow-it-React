import { NavLink } from 'react-router-dom'

const Nav = ()=>{
  return(
    <div>
    <NavLink className='nav_links' to='/home'>Home</NavLink>
    <NavLink className='nav_links' to='/add-note'>Add A Note</NavLink>
    </div>
  )
}
export default Nav 