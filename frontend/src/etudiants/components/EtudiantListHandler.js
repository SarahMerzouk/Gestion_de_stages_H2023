import React from "react";
import Card from "../../shared/UIElements/Card";
import EtudiantItem from "./EtudiantItem";
import Button from "../../shared/FormElements/Button";
import "./EtudiantListHandler.css"

const EtudiantListHandler = props => {
    if (props.items.length === 0) {
        return (
            <div className="etudiant-list centre">
                <Card>
                    <h2>Aucun étudiant trouvé.</h2>
                    <Button to="/">Retour au menu</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="div-ELH">
            <h3>Tout les étudiants</h3>
            <ul className="liste-etudiant">
                {props.items.map(etudiant => (
                    <EtudiantItem
                        key={etudiant.id}
                        noDa={etudiant.noDa}
                        nom={etudiant.nom}
                        courriel={etudiant.courriel}
                        profil={etudiant.profil}
                        stage={etudiant.stage}
                    />
                ))}
            </ul>
        </div>
    );
}

export default EtudiantListHandler;
