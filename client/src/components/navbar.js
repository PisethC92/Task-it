import React from "react";
import "./navbar.css";

// Import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img style={{"width" : 10 + '%'}} src='https://cdn-icons-png.flaticon.com/512/824/824580.png?w=826&t=st=1675537015~exp=1675537615~hmac=16be06d7a8cf3a1b5ad79915072e70870de0672f0cf7d1a5aa27f99b41fa88e7'></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto">
            <div className="nav-item">
              <NavLink className="nav-link" to="/create">
                <button>
                  Add Task
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
