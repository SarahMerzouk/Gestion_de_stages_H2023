import React, { useState, useEffect } from "react";

import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./EtudiantItem.css";

const EtudiantItem = (props) => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [showStages, setShowStage] = useState(false);
  const [listeStages, setListeStages] = useState([]);

  function toggleShowStages() {
    if (showStages === false) {
      setShowStage(true);
    } else {
      setShowStage(false);
    }
  }

  useEffect(() => {
    const fetchStages = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/stages/`
        );
        setListeStages(responseData.stages);
      } catch (err) {}
    };
    fetchStages();
  }, [sendRequest]);
  return (
    <React.Fragment>
      <div className="div-etudiant">
        <ErrorModal error={error} onClear={clearError} />
        <p>{props.noDa}</p>
        <p>{props.nom}</p>
        <p>{props.courriel}</p>
        <p>{props.profil}</p>

        {props.stage && props.stage.length === 1 ? (
            // je n'arrive pas à afficher la description et je ne sais pas pk
          <p>{props.stage[0]}</p>
        ) : (
          <button onClick={toggleShowStages}>Assigner un stage</button>
        )}
        {showStages === true ? (
          <select>
            {listeStages?.map((stage) => (
                console.log(stage),
              <option key={stage.description}>{stage.description}</option>
            ))
            }
          </select>
        ) : (
          <span></span>
        )}
      </div>
    </React.Fragment>
  );
};

export default EtudiantItem;
