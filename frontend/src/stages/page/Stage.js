import React, { useState, useEffect } from "react";
import StagesList from "../component/stageList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import FiltreProgramme from "../component/filtreProgramme";

const Stages = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [stages, setStages] = useState();
  const [filteredProfil, setFilteredProfil] = useState("Développement des application");

  const filterChangeHandler = (selectedProfil) => {
    setFilteredProfil(selectedProfil);
  };

  const profilsFiltrees = stages && stages.filter((stageItem) => {
    return stageItem.typeDeStage.toString() === filteredProfil;
  });

  useEffect(() => {
    const recupererStages = async () => {
      try {
        const reponseData = await sendRequest(
          "http://localhost:5000/api/stages"
        );
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
      <h2 className="titre"> Liste de stages</h2>
      {
        <FiltreProgramme
          selected={filteredProfil}
          onChangementFiltre={filterChangeHandler}
        />
      }
      {stages && <StagesList items={profilsFiltrees} />};
    </React.Fragment>
  );
};

export default Stages;
