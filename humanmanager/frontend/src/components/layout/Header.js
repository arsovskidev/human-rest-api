import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, manager } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-light">
            {manager ? `Welcome [${manager.username}]` : " "}
          </a>
        </li>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            type="submit"
            className="btn navbar-btn background-dark-purple"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
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
    );

    return (
      <nav className="navbar navbar-expand navbar-dark background-purple">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Human Manager
            </a>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
