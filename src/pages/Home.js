import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Home = () => {
  <div>
    <Link to={'/'}>Home</Link>
    <br />
    <Link to={'contact'}>Contact</Link>
    <br />
    <Link to={'layout'}>Layout</Link>
    <br />
    <Link to={'blogs'}>Blogs</Link>
    <br />
    <Link to={'nopage'}>Nopage</Link>
    <br />
    <Outlet />
    <hr />
  </div>;
};

export default Home;
