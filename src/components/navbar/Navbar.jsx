import React from 'react'
import './navbar.css'
import logo from '../../assets/portfolio-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} height={100} width={100}/>
        <ul className="nav-menu">
           <Link to="/"> <li>Home</li></Link>
           <Link to="/about"> <li>About Us</li></Link>
           <Link to="/service"> <li>Service</li></Link>
           <Link to="/mywork"> <li>Portfolio</li></Link>
           <Link to="/contact"> <li>Contact Us</li></Link>
        </ul>
        <div className="nav-connect">
           <Link to='/contact'> <p>Connect with me </p></Link>
        </div>
    </div>
  )
}

export default Navbar