import React, { useState, useEffect } from "react";
import StagesList from "../component/stageList";
import ErrorModal from "../../shared/UIElements/ErrorModal";

const Stages = () => {
    const [error, setError] = useState();
    const [stages, setStages] = useState();

    useEffect(() => {
        const envoyerRequete = async () => {
          try {
            const reponse = await fetch("http://localhost:5000/api/stages");
    
            const reponseData = await reponse.json();
            console.log(reponseData);
            if (!reponse.ok) {
              throw new Error(reponseData.message);
            }
            console.log(reponseData)
            setStages(reponseData.utilisateurs);
          } catch (err) {
            setError(err.message);
          }
        };
        envoyerRequete();
      }, []);
    
      const errorHandler = () => {
        setError(null);
      };
    
      return (
        <React.Fragment>
            <ErrorModal error={error} onClear={errorHandler} />
            {stages && <StagesList items={stages} />};
        </React.Fragment>
      );
}

export default Stages;
