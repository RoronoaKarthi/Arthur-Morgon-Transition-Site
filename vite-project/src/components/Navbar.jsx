import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">THE AMERICAN <span>OUTLAW</span></div>

      <ul className="nav-links">
        <li>Blackwater</li>
        <li>Strawberry</li>
        <li>Valentine</li>
        <li>Saint Danis</li>
      </ul>
    </nav>
  )
}

export default Navbar