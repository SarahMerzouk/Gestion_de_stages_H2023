import React from "react";

function StageItem({stage}) {

    return (
        <li>
            <div>
                <h2>{stage.description}</h2>
                <p>
                    <span className="titre">Nom de la personne à contacter:</span>
                    <span className="valeur">{stage.nomPersonneContact}</span>
                </p>

                <p>
                    <span className="titre">Courriel de la personne contact: </span>
                    <span className="valeur">{stage.courrielPersonneContact}</span>
                </p>

                <p>
                    <span className="titre">Numéro de la personne contact: </span>
                    <span className="valeur">{stage.numeroPersonneContact}</span>
                </p>

                <p>
                    <span className="titre">Adresse de l'entreprise: </span>
                    <span className="valeur">{stage.adresseEntreprise}</span>
                </p>

                <p>
                    <span className="titre">Type de stage: </span>
                    <span className="valeur">{stage.typeDeStage}</span>
                </p>

                <p>
                    <span className="titre">Nombre de postes disponibles: </span>
                    <span className="valeur">{stage.nbPostesDispo}</span>
                </p>
                
                <p>
                    <span className="titre">Rémunération: </span>
                    <span className="valeur">{stage.remuneration}</span>
                </p>
            </div>
        </li>
    );
}

export default StageItem;