import React, { useContext, useState } from "react";
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

  const [saisieNomPersonneContact, setSaisieNomPersonneContact] = useState("");
  const [saisieCourrielPersonneContact, setSaisieCourrielPersonneContact] = useState("");
  const [saisieNumeroPersonneContact, setSaisieNumeroPersonneContact] = useState("");
  const [saisieAdresse, setSaisieAdresse] = useState("");
  const [saisieTypeStage, setSaisieTypeStage] = useState("Développement des applications");
  const [saisieNbPoste, setSaisieNbPoste] = useState(0);
  const [saisieTitre, setSaisieTitre] = useState("");
  const [saisieRemuneration, setSaisieRemuneration] = useState(0);
  const {error, sendRequest, clearError } = useHttpClient();
  
  const history = useHistory();

  // handler des saisies
  function saisieNomHandler(event) {
    setSaisieNomPersonneContact(event.target.value);
  }

  function saisieCourrielHandler(event) {
    setSaisieCourrielPersonneContact(event.target.value);
  }

  function saisieNumeroHandler(event) {
    setSaisieNumeroPersonneContact(event.target.value);
  }

  function saisieAdresseHandler(event) {
    setSaisieAdresse(event.target.value);
  }

  function saisieTypeStageHandler(event) {
    setSaisieTypeStage(event.target.value);
  }

  function saisieNbPostesHandler(event) {
    setSaisieNbPoste(event.target.value);
  }

  function saisieTitreHandler(event) {
    setSaisieTitre(event.target.value);
  }

  function saisieRemunerationHandler(event) {
    setSaisieRemuneration(event.target.value);
  }

  const stageSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/stages",
        "POST",
        JSON.stringify({
          nomPersonneContact: saisieNomPersonneContact,
          courrielPersonneContact: saisieCourrielPersonneContact,
          numeroPersonneContact: saisieCourrielPersonneContact ,
          adresseEntreprise: saisieAdresse,
          typeDeStage: saisieTypeStage,
          nbPostesDispo: saisieNbPoste,
          description: saisieTitre,
          remuneration: saisieRemuneration,
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
    <div>
      <form onSubmit={stageSubmitHandler}>
        <h3>Ajouter un stage</h3>

        <div>
            <label>Titre du stage: </label>
            <input type="text"value={saisieTitre} onChange={saisieTitreHandler} className="champ-formulaire" required minLength={5} />
        </div>

        <div>
            <label>Nom du recruteur: </label>
            <input type="text" value={saisieNomPersonneContact} onChange={saisieNomHandler} required minLength={5} />
        </div>
        
        <div>
            <label>Numéro du recruteur: </label>
            <input type="text" value={saisieNumeroPersonneContact} onChange={saisieNumeroHandler} required minLength={10}/>
        </div>
        
        <div>
            <label>Courriel du recruteur: </label>
            <input type="text" value={saisieCourrielPersonneContact} onChange={saisieCourrielHandler} required minLength={5} />
        </div>
        
        <div>
            <label>Adresse de l'entreprise: </label>
            <input type="text" value={saisieAdresse} onChange={saisieAdresseHandler} required minLength={5}/>
        </div>
        
        <div>
            <label>Type de stage: </label>
            <select>
              <option value={saisieTypeStage} onChange={saisieTypeStageHandler}>Réseaux</option>
              <option value={saisieTypeStage} onChange={saisieTypeStageHandler}>Développement des applications</option>
            </select>
        </div>

        <div>
            <label>Nombre de postes: </label>
            <input type="number" value={saisieNbPoste} onChange={saisieNbPostesHandler} required minLength={1} />
        </div>

        <div>
            <label>Rémunération: </label>
            <input type="text" value={saisieRemuneration} onChange={saisieRemunerationHandler} required minLength={1} />
        </div>
        
        <Button type="submit">
             Ajouter un stage!
        </Button>
      </form>
    </div>
  );
}
/*
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
*/

export default NewStage;
