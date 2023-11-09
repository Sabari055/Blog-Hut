import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>

    <div className='container'>
        <Link to='/'><h4><b>Blog Hut</b></h4></Link>
        <nav>
            <Link to="/"><h6>Home</h6></Link>
            <Link to="/create"><h6>Create Post</h6></Link>
        </nav>
    </div>

    </header>
  )
}
