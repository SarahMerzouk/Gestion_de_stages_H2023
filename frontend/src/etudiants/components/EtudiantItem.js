import React, { useState, useEffect } from "react";

import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./EtudiantItem.css";



const EtudiantItem = (props) => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [showStages, setShowStage] = useState(false);
  const [listeStages, setListeStages] = useState([]);
  const [etudiantNom, setEtudiantNom] = useState("");
  let idStage;

  function toggleShowStages() {
    if (showStages === false) {
      setShowStage(true);
      setEtudiantNom(props.nom);
    } else {
      setShowStage(false);
      setEtudiantNom("");
      idStage = ""
    }
  }

  const etudiantAssignationPostHandler = async event => {

    try {
        const responseData = await sendRequest(
            "http://localhost:5000/api/etudiants/inscription/",
            "POST",
            JSON.stringify({
              etudiantNom: etudiantNom,
              stageId: idStage
          }),
          {
              "Content-Type": "application/json",
          }
        );

        console.log(responseData);
    } catch (err) {
        console.log(err)
    }
    window.location.reload();
  }

  function assignerStageHandler(event) {
    console.log(event.target);

    listeStages?.map((stage) => {

      if (event.target.value !== "Sélectionner un stage") {
        if (stage.description === event.target.value) {
          idStage = stage.id
        }
      } else {
        idStage = ""
      }
    })
    
    etudiantAssignationPostHandler();

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
          <p>Un stage est assigné</p>
        ) : (
          <button onClick={toggleShowStages}>Assigner un stage</button>
        )}
        {showStages && (
          <select onChange={assignerStageHandler}>
            <option>Sélectionner un stage</option>
            {listeStages?.map((stage) => {
              if (
                (props.profil === "Réseaux" &&
                  stage.typeDeStage === "Réseaux" && stage.nbPostesDispo !== 0) || 
                (props.profil === "Développement des applications" &&
                  stage.typeDeStage === "Développement des applications" && stage.nbPostesDispo !== 0)
              ) {
                return (
                  <option key={stage.description}>{stage.description}</option>
                );
              } else {
                return null;
              }
            })}
          </select>
        )}
      </div>
    </React.Fragment>
  );
};

export default EtudiantItem;
