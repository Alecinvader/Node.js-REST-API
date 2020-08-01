import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg container">
        <Link to="/" className="navbar-brand">Library</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Library</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Book</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}