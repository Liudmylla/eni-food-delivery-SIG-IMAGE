import { Link } from 'react-router-dom'
import '../styles/NavMenuStyle.css'

function NavMenu () {
  return (
    <div className='nav-container'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/restaurants'>Restaurants</Link>
        </li>
        <li>
          <Link to='/auth'>Auth</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
