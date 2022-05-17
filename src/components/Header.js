import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
      <Link to="/" className="navbar-brand color-light" >Mount Zion College</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className="nav-link">Add Student</Link>
        <Link to="/Search" className="nav-link">Search Student</Link>
      
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Header