import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./navigation/Navigation/MainNavigation";
import Stages from "./stages/page/Stage";
import Acceuil from "./pagesInformatives/Acceuil";
import Etudiants from "./etudiants/pages/Etudiant";
import DeroulementStageEmployeur from "./pagesInformatives/DeroulementStageEmployeur";
import DeroulementStageEtudiant from "./pagesInformatives/DeroulementStageEtudiant";
import ProfilEtCompetence from "./pagesInformatives/ProfilEtCompetence";
import FAQ from "./pagesInformatives/Faq";
import MainFooter from "./piedDePage/footer/MainFooter";

import './App.css';

function App(){
  // je les ai mis en commentaire, car pour l'instant, il n'y a rien dedans (les fichers pages) et cela faisait des erreurs.
  return (
    
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Acceuil />
          </Route>
          
          <Route path="/stage" exact>
            <Stages />
          </Route>
          
          <Route path="/etudiant" exact>
            {/*<Etudiants />*/}
          </Route>

          <Route path="/deroulementStageEmployeur" exact>
            <DeroulementStageEmployeur />
          </Route>
          
          <Route path="/deroulementStageEtudiant" exact>
            <DeroulementStageEtudiant />
          </Route>
          
          <Route path="/profilEtCompetence" exact>
            {<ProfilEtCompetence />}
          </Route>
          
          <Route path="/faq" exact>
            <FAQ />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
      <MainFooter />
    </Router>
  );
};


export default App;
