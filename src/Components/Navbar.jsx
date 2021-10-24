import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const _handleLogout = () => {
    history.replace("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/men">
            CHARACTERS APP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-info"
                  className="nav-link active"
                  aria-current="page"
                  to="/men"
                >
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-info"
                  className="nav-link"
                  to="/women"
                >
                  Women
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active text-info"
                  className="nav-link"
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-danger" onClick={_handleLogout}>
                LogOut
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
