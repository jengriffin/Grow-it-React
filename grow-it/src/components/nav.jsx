import { NavLink } from 'react-router-dom'

const Nav = ()=>{
  return(
    <div class="grid gap-4 grid-cols-3 grid-rows-1 text-center">
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to='/'>Home</NavLink>
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to='/blogs'>Notes</NavLink>
    <NavLink className="text-3xl text-gray-700 font-bold mb-5" to ='/plants'>Plants</NavLink>
    </div>
  )
}
export default Nav 