import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import logo from "../logo/logo avec titre.png";

import "../styles/MainNavigation.css";

function MainNavigation(props) {

  return (
    <React.Fragment>

      <Header>
        <div className="header-logo-div">
          <Link to="/">
            <img src={logo} alt="logo montmorency" width="265" height="48" id="logo"/>
          </Link>
        </div>
        <nav className="nav">
          <NavLinks/>
        </nav>
      </Header>
    </React.Fragment>
  );
}

export default MainNavigation;
