import React from "react";
import NouvelEtudiant from "../components/NouvelEtudiant";
import EtudiantList from "../components/EtudiantList";

function Etudiant() {
    return (
        <React.Fragment>
            <h2 className="titre">Étudiants en recherche de stage</h2>
            <NouvelEtudiant />
            <EtudiantList />
        </React.Fragment>
    );
}

export default Etudiant;