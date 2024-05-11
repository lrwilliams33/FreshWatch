import React from 'react';
import { Link } from 'react-router-dom'
import {useLogout} from '../../hooks/useLogout'
import {useAuthContext} from '../../hooks/useAuthContext'
import './Header.css'

const Header = () => {
  const {logout} = useLogout()
  const{user} = useAuthContext()
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
          {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick} className='button'>Log out</button>
          </div>
          )}
          {!user && (
          <div>
            <Link to="/login">Login </Link>
            <Link to="/signup">Sign Up</Link>
          </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header;
