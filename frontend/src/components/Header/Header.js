import React from 'react';
import { Link } from 'react-router-dom'
import {useLogout} from '../../hooks/useLogout'
import './Header.css'

const Header = () => {
  const {logout} = useLogout()
  
  const handleClick = () => {
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link className='fresh-watch-txt' to="/">
          <h1>FreshWatch</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
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
