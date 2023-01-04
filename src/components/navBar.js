import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => (
  <div className="navBar">
    <h1>Book Store</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default navBar;