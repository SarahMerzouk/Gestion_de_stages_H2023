import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks(props) {
  return <ul>
    <li>
      <NavLink to="/" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/stage">Stages</NavLink>
    </li>
    <li>
      <NavLink to="/etudiant">Etudiants</NavLink>
    </li>
    <li>
      <NavLink to="/deroulementStageEmployeur">Déroulement des stages (Employeurs)</NavLink>
    </li>
    <li>
      <NavLink to="/profilEtCompetence">Profils et compétences des stagiaires</NavLink>
    </li>
    <li>
      <NavLink to="/deroulementStageEtudiant">Déroulement des stages (Étudiants)</NavLink>
    </li>
    <li>
      <NavLink to="/faq">Foire aux questions</NavLink>
    </li>
  </ul>
};

export default NavLinks;