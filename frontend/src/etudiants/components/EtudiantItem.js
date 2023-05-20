import React, { useState } from "react";

import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./EtudiantItem.css"

const EtudiantItem = props => {
    const {error, sendRequest, clearError } = useHttpClient();
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmStageHandler = async () => {
        /*setShowConfirmModal(false);
        try {
          await sendRequest(
            `http://localhost:5000/api/places/${props.id}`,
            'DELETE'
          );
          props.onDelete(props.id);
        } catch (err) {}*/
    };

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            
        </React.Fragment>
    )
}