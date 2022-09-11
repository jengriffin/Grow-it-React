import { NavLink } from 'react-router-dom'

const Nav = ()=>{
  return(
    <div>
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to='/'>Home</NavLink>
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to='/blog'>Add A Note</NavLink>
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to='/blogs'>Notes</NavLink>
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to ='/plants'>Plants</NavLink>
    </div>
  )
}
export default Nav 