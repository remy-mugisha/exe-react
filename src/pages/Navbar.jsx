import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="home-navbar">
        <div className="logo">Logo</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/Blogs">Blogs</a></li>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Login" className="login">Login</a></li>
        <li><a href="/Signup" className="signup">Sign up</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
