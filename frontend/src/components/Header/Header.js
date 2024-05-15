import React from 'react';
import { Link } from 'react-router-dom'
import {useLogout} from '../../hooks/useLogout'
import {useAuthContext} from '../../hooks/useAuthContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLeaf} from '@fortawesome/free-solid-svg-icons'
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
          <h1>FreshWatch <FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon></h1>
        </Link>
        <nav>
          {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick} className='button' id='logout-btn'>Log out</button>
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
