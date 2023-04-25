import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='my-navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
