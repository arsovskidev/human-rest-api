import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark background-purple">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Human Manager
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#" className="text-light">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
