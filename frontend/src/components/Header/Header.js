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
      </div>
    </header>
  )
}

export default Header;
