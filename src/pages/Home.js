import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'contact'}>Contact</Link>
      <br />
      <Link to={'layout'}>Layout</Link>
      <br />
      <Link to={'blogs'}>Blogs</Link>
      <br />
      <hr />
      <Outlet />
    </div>
  );
};

export default Home;
