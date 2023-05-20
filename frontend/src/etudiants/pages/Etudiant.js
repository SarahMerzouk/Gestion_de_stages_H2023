import React from "react";
import NouvelEtudiant from "../components/NouvelEtudiant";

function Etudiant() {
    return (
        <React.Fragment>
            <h2 className="titre">Étudiants en recherche de stage</h2>
            <NouvelEtudiant />
        </React.Fragment>
    );
}

export default Etudiant;