import React from "react";
import "./NouvelEtudiant.css"
import { useHistory } from 'react-router-dom';

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";


const NouvelEtudiant = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            noDa: {
                value: '',
                isValid: false
            },
            nom: {
                value: '',
                isValid: false
            },
            courriel: {
                value: '',
                isValid: false
            },
            profil: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const history = useHistory();

    const etudiantSubmitHandler = async event => {
        event.preventDefault();
        console.log(formState.inputs);

        try {
            const responseData = await sendRequest(
                "http://localhost:5000/api/etudiants",
                "POST",
                JSON.stringify({
                    noDa: formState.inputs.noDa.value,
                    nom: formState.inputs.nom.value,
                    courriel: formState.inputs.courriel.value,
                    profil: formState.inputs.profil.value
                }),
                {
                    "Content-Type": "application/json",
                }
            );

            console.log(responseData);
            history.push("/")
        } catch (err) {
            console.log(err)
        }
    }

    return (
       <React.Fragment>
        <ErrorModal error={error} onClear={clearError}/>
        <form className="formulaire-etudiant" onSubmit={etudiantSubmitHandler}>
            <Input
                id="noDa"
                element="input"
                type="text"
                label="Numéro d'étudiant"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Entrez un numero de d'étudiant valide."
                onInput={inputHandler}
                className="champ-formulaire"
            />
            <Input
                id="nom"
                element="input"
                type="text"
                label="Nom et prénom"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Entrez un nom et prénom valides."
                onInput={inputHandler}
                className="champ-formulaire"
            />
            <Input
                id="courriel"
                element="input"
                type="text"
                label="Courriel"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                errorText="Entrez un courriel valide."
                onInput={inputHandler}
                className="champ-formulaire"
            />
            <Input
                id="profil"
                element="input"
                type="text"
                label="Profil de sortie"
                validators={[VALIDATOR_REQUIRE()]}    //Comment appliquer plusieurs validateurs?
                errorText="Entrez un profil de sortie valide."
                onInput={inputHandler}
                className="champ-formulaire"
            />
            <Button type="submit" disabled={!formState.isValid}>
                Ajouter un étudiant!
            </Button>
        </form>
       </React.Fragment>
    );

}

export default NouvelEtudiant;