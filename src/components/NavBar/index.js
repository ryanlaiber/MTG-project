import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return(
    <nav>
      <Link to="/">Poke-Project</Link>
      <Link to="/about">About me</Link>
    </nav>
  );
};

export default NavBar;
