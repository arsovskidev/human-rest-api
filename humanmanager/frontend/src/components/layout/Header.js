import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark background-purple">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Human Manager
            </a>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-light">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
