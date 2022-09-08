import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/puppy">Puppy</Link>
      <Link to="/search">Search</Link>
    </div>
  );
}

export default Navbar