import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Stages from "./stages/page/Stage";
import Acceuil from "./acceuil/page/Acceuil";
import Etudiants from "./etudiants/pages/Etudiant";
import DeroulementStageEmployeur from "./deroulementStageEmployeur/page/DeroulementStageEmployeur";
import DeroulementStageEtudiant from "./deroulementStageEtudiant/page/DeroulementStageEtudiant";
import ProfilEtCompetence from "./profilEtCompetence/page/ProfilEtCompetence";
import FAQ from "./faq/page/Faq";

import './App.css';

function App(){
  // je les ai mis en commentaire, car pour l'instant, il n'y a rien dedans (les fichers pages) et cela faisait des erreurs.
  return (
    
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            {/*<Acceuil />*/}
          </Route>
          
          <Route path="/" exact>
            {/*<Stages />*/}
          </Route>
          
          <Route path="/" exact>
            {/*<Etudiants />*/}
          </Route>

          <Route path="/" exact>
            {/*<DeroulementStageEmployeur />*/}
          </Route>
          
          <Route path="/" exact>
            {/*<DeroulementStageEtudiant />*/}
          </Route>
          
          <Route path="/" exact>
            {/*<ProfilEtCompetence />*/}
          </Route>
          
          <Route path="/" exact>
            {/*<FAQ />*/}
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};


export default App;
