import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <nav>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/header" >Header</NavLink></li>
      <li><NavLink to="/playerlist">PlayerList</NavLink></li>
      <li><NavLink to="/addplayer">AddPlayer</NavLink></li>
    </ul>    
  </nav>
);

export default Nav;