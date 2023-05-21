import React, { useEffect, useState} from "react";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./EtudiantList.css"
import EtudiantListHandler from "./EtudiantListHandler";


const EtudiantList = () => {
    const [loadedEtudiants, setLoadedEtudiants] = useState();
    const { error, sendRequest, clearError } = useHttpClient();
  
    useEffect(() => {
      const fetchEtudiants = async () => {
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/api/etudiants/`
          );
          setLoadedEtudiants(responseData.etudiants);
        } catch (err) {}
      };
      fetchEtudiants();
    }, [sendRequest]);

    return (
        <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
          {loadedEtudiants && (
            <EtudiantListHandler items={loadedEtudiants} />
          )}
        </React.Fragment>
      );
}

export default EtudiantList;