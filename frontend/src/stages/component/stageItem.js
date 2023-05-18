import React from "react";

import "./stageItem.css";

function StageItem(props) {
    console.log(props);

    return (
        <div>
            <li className="item">
                <div>
                    <h2>{props.description}</h2>
                    <p>
                        <span className="title">Nom de la personne à contacter:</span>
                        <span className="valeur">{props.nomPersonneContact}</span>
                    </p>

                    <p>
                        <span className="title">Courriel de la personne contact: </span>
                        <span className="valeur">{props.courrielPersonneContact}</span>
                    </p>

                    <p>
                        <span className="title">Numéro de la personne contact: </span>
                        <span className="valeur">{props.numeroPersonneContact}</span>
                    </p>

                    <p>
                        <span className="title">Adresse de l'entreprise: </span>
                        <span className="valeur">{props.adresseEntreprise}</span>
                    </p>

                    <p>
                        <span className="title">Type de stage: </span>
                        <span className="valeur">{props.typeDeStage}</span>
                    </p>

                    <p>
                        <span className="title">Nombre de postes disponibles: </span>
                        <span className="valeur">{props.nbPostesDispo}</span>
                    </p>
                </div>
            </li>
        </div>
    );
}

export default StageItem;