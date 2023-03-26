import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div>
            LOGO
        </div>
        <div>
            <ol>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/signup">SIGNUP</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Nav