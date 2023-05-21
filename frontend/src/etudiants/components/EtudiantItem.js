import React, { useState, useEffect } from "react";

import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./EtudiantItem.css"

const EtudiantItem = props => {
    const {error, sendRequest, clearError } = useHttpClient();
    const [showStages, setShowStage] = useState(false);
    const [listeStages, setListeStages] = useState();


    function toggleShowStages() {
        if (showStages === false) {
            setShowStage(true)
        } else {
            setShowStage(false)
        }
    }

    useEffect(() => {
        const fetchStages = async () => {
          try {
            const responseData = await sendRequest(
              `http://localhost:5000/api/stages/`
            );
            setListeStages(responseData.stage);
          } catch (err) {}
        };
        fetchStages();
    }, [sendRequest]);


    return (
        <React.Fragment>
            <div className="div-etudiant" >
                <ErrorModal error={error} onClear={clearError} />
                <p>{props.noDa}</p>
                <p>{props.nom}</p>
                <p>{props.courriel}</p>
                <p>{props.profil}</p>

                {props.stage === [] ? <p>{props.stage}</p> :
                <button onClick={toggleShowStages}>Assigner un stage</button>}
                { showStages === true ?
                    <select>
                        {listeStages?.map(stage => (
                            <option>yo</option>
                        ))}
                    </select> : <span></span>
                }
                
            </div>
        </React.Fragment>
    )
}

export default EtudiantItem;