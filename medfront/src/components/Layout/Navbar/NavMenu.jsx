import { NavLink } from "react-router-dom"

const NavMenu = ({ closeMenu }) => {
  return (
    <ul className="nav-menu">

      <li>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
      </li>

      <li>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
      </li>

      <li>
        <NavLink to="/doctors" onClick={closeMenu}>Doctors</NavLink>
      </li>

      <li>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
      </li>

      <li>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </li>

    </ul>
  )
}

export default NavMenu