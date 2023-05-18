import React from "react";

import StageItem from "./stageItem";

function ListeDeStages(props) {
    if (props.items.length === 0) {
        return (
          <div className="center">
              <h2>Aucun stage trouvé</h2>
          </div>
        );
      }

    return (
        <ul>
            {props.stage.map(unStage => {
                <div key={unStage.description}>
                    <StageItem stage={unStage}/>
                </div>
            })}
        </ul>
    );
}

export default ListeDeStages;