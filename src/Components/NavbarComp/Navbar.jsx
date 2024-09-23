import React from 'react'
import './Navbar.css';
import logo from "../../assets/Images/pimage_a.png"

const Navbar = () => {
  return (
    <nav className='nav_container'>
      <div className='nav_image'>
      <img src={logo}/>
      </div>
    <ul className='nav_list'>
      <li><a href='#'>Who We Are</a></li>
      <li><a href='#'>Our Products and Services</a></li>
      <li><a href='#'>Join Us</a></li>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>Contact Us</a></li>
    </ul>
    </nav>
  )
}

export default Navbar