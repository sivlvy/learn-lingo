import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/teachers">Teachers</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  )
}

export default NavBar
