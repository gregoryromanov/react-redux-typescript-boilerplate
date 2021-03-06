import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/" className="brand-logo">
        Redux + TypeScript
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li cy-data="home-nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
