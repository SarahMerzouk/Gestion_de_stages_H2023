import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import logo from "../logo/logoMonmo.png";

import "../styles/MainNavigation.css";

function MainNavigation(props) {

  return (
    <React.Fragment>

      <Header>
      <Link to="/">
        <img src={logo} alt="logo montmorency" width="100" height="100" />
      </Link>
        <nav className="nav">
          <NavLinks/>
        </nav>
      </Header>
    </React.Fragment>
  );
}

export default MainNavigation;
