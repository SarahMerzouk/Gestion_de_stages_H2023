import React from "react";
import { Link } from "react-router-dom";

import "./styles/deroulementStageEmployeur.css";
import NewStage from "../stages/ajoutStage/newStage";

function DeroulementStageEmployeur() {
    return (
        <div>
            <h2 className="titre">Page de déroulement de stage pour l'employeur</h2>

            <div className="deroulement">
                <h4>Formulaire d'inscription de milieu de stage</h4>

                <p> {">>> "} Stages réguliers ayant lieu à la session hiver</p> 

                <p> {">>> "} Les stages sont du 21 janvier au 3 mai 2019
                (il est toutefois possible après entente avec le coordonnateur de débuter le stage un peu plus tôt)</p>

                <p> {">>> "} Sur réception de ce formulaire, le coordonnateur des stages
                entrera en contact avec le responsable en entreprise pour discuter du stage.</p>
		                      
                <p> {">>> "} Veuillez vous référez à la page 
                    <Link to="/profilEtCompetence"> profil de sortie </Link> 
                pour connaître le profil de sortie et les compétences des étudiants.</p>
            </div>

            <div>
                <React.Fragment>
                    <NewStage />
                </React.Fragment>
            </div>
        </div>
        
    );
}

export default DeroulementStageEmployeur;