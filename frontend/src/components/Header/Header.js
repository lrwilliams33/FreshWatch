import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link className='fresh-watch-txt' to="/">
          <h1>FreshWatch</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login </Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
