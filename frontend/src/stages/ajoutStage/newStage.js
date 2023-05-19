import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import ErrorModal from "../../shared/UIElements/ErrorModal";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";

const NewStage = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      nomPersonneContact: {
        value: "",
        isValid: false,
      },
      courrielPersonneContact: {
        value: "",
        isValid: false,
      },
      numeroPersonneContact: {
        value: "",
        isValid: false,
      },
      adresseEntreprise: {
        value: "",
        isValid: false,
      },
      typeDeStage: {
        value: "",
        isValid: false,
      },
      nbPostesDispo: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      remuneration: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const stageSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formState.inputs);

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/stages",
        "POST",
        JSON.stringify({
          nomPersonneContact: formState.inputs.nomPersonneContact.value,
          courrielPersonneContact:
            formState.inputs.courrielPersonneContact.value,
          numeroPersonneContact: formState.inputs.numeroPersonneContact.value,
          adresseEntreprise: formState.inputs.adresseEntreprise.value,
          typeDeStage: formState.inputs.typeDeStage.value,
          nbPostesDispo: formState.inputs.nbPostesDispo.value,
          description: formState.inputs.description.value,
          remuneration: formState.inputs.remuneration.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(responseData);
      
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <React.Fragment>
     <ErrorModal error={error} onClear={clearError}/>
     <form onSubmit={stageSubmitHandler}>
        
        <Input
             id="description"
             element="input"
             type="text"
             placeholder="Titre du poste"
             label="Titre du poste: "
             validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
             errorText="Entrez un titre valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="nomPersonneContact"
             element="input"
             type="text"
             placeholder="Nom et prénom"
             label="Nom du recruteur: "
             validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
             errorText="Entrez un nom valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="courrielPersonneContact"
             element="input"
             type="text"
             placeholder="aaaa@aaaa.com"
             label="Courriel du recruteur : "
             validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL]}
             errorText="Entrez un courriel valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="numeroPersonneContact"
             element="input"
             type="text"
             placeholder="514-000-0000"
             label="Numéro du recruteur :"
             validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(10)]}
             errorText="Entrez un numéro valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="adresseEntreprise"
             element="input"
             type="text"
             placeholder="21 Bd de l'avenir, Laval, Qc"
             label="Adresse de l'entreprise: "
             validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
             errorText="Entrez une adresse valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="typeDeStage"
             element="input"
             type="text"
             placeholder="Réseaux ou Développement des applications "
             label="Profil de stage: "
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Entrez un profil valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="nbPostesDispo"
             element="input"
             type="text"
             placeholder="1"
             label="Nombre de postes: "
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Entrez un nombre valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Input
             id="remuneration"
             element="input"
             type="text"
             placeholder="25 $/h"
             label="Rémunération: "
             validators={[VALIDATOR_REQUIRE()]}
             errorText="Entrez un salaire valide."
             onInput={inputHandler}
             className="champ-formulaire"
         />
         <Button type="submit" disabled={!formState.isValid}>
             Ajouter un stage!
         </Button>
     </form>
    </React.Fragment>
  );
};

export default NewStage;
