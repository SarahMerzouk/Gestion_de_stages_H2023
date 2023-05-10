import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import Backdrop from "./Backdrop";

function MainNavigation(props) {
  const [tiroirOuvert, setTiroirOuvert] = useState(false);

  function ouvrirTiroir() {
    setTiroirOuvert(true);
  }

  function fermerTiroir() {
    setTiroirOuvert(false);
  }

  return (
    <React.Fragment>
      {tiroirOuvert && <Backdrop onClick={fermerTiroir} />}

      <Drawer show={tiroirOuvert} onClick={fermerTiroir}>
        <nav>
          <NavLinks />
        </nav>
      </Drawer>

      <Header>
        <button onClick={ouvrirTiroir}>
          <span />
          <span />
          <span />
          <span />
        </button>
        <h1>
          <Link to="/">Gestion des stages du collège</Link>
        </h1>
        <nav>
          <NavLinks/>
        </nav>
      </Header>
    </React.Fragment>
  );
}

export default MainNavigation;
