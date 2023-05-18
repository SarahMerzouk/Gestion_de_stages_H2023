import React, { useState, useEffect } from "react";
import StagesList from "../component/stageList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/UIElements/ErrorModal";

const Stages = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [stages, setStages] = useState();
    useEffect(() => {
      const recupererStages = async () => {
        try {
          const reponseData = await sendRequest("http://localhost:5000/api/stages");
          setStages(reponseData.stages);

        } catch (err) {
          //
        }
      };
      recupererStages();
    }, [sendRequest]);
    
      return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {stages && <StagesList items={stages} />};
        </React.Fragment>
      );
}

export default Stages;
