import React from "react";

import StageItem from "./stageItem";
import "./stageList.css";

function ListeDeStages(props) {
    if (props.items.length === 0) {
        return (
          <div className="center">
              <h2>Aucun stage trouvé</h2>
          </div>
        );
      }

    return (
        <ul className="list">
            {props.items.map(unStage => {
               return <StageItem 
                    key={unStage.description}
                    nomPersonneContact={unStage.nomPersonneContact}
                    courrielPersonneContact={unStage.courrielPersonneContact}
                    numeroPersonneContact={unStage.numeroPersonneContact}
                    adresseEntreprise={unStage.adresseEntreprise}
                    typeDeStage={unStage.typeDeStage}
                    nbPostesDispo={unStage.nbPostesDispo}
                    remuneration={unStage.remuneration}/>
            })}
        </ul>
    );
}

export default ListeDeStages;