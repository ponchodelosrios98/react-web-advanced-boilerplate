import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/" href="/"><h2>Journalistic Learning Community</h2></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" href="/outcomes" to="/outcomes">Outcome</Link>
          <Link className="nav-link" href="/" to="/">Starting</Link>
          <Link className="nav-link" href="/" to="/">Running</Link>
          <Link className="nav-link" href="/" to="/">Links &amp; Research</Link>
          <Link className="nav-link" href="/" to="/">About Woj</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
