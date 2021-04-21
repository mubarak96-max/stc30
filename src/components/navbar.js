import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <nav>
      <div className="nav-header">
        <div className="head">
          <div className="title">
            <Link to="/">stem cell therapy stc30</Link>
          </div>
          <div className="links">
            <Link to="/about">About</Link>
            <Link to="/diseases">Diseases</Link>
          </div>
        </div>
        <span>The last hope for doctors</span>
      </div>
    </nav>
  )
}

export default Navbar
