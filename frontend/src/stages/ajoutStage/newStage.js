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
  const [saisieCourrielPersonneContact, setSaisieCourrielPersonneContact] =
    useState("aa@aa.com");
  const [saisieNumeroPersonneContact, setSaisieNumeroPersonneContact] =
    useState("514 000 0000");
  const [saisieAdresse, setSaisieAdresse] = useState(
    "21 Rue Lucien-paiement, Laval, Qc"
  );
  const [saisieTypeStage, setSaisieTypeStage] = useState("Réseaux");
  const [saisieNbPoste, setSaisieNbPoste] = useState(0);
  const [saisieTitre, setSaisieTitre] = useState("");
  const [saisieRemuneration, setSaisieRemuneration] = useState("25 $/h");
  const { error, sendRequest, clearError } = useHttpClient();

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

  // fonction qui vérifie si une valeur contient un nombre
  function containsNumbers(str) {
    return /\d/.test(str);
  }

  // fonction qui vérifier si une valeur ne contient que des nombres
  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  // vérifie que le mail respecte le format
  function respectMailFormat(str) {
    return /^\S+@\S+\.\S+$/.test(str);
  }

  // fonction qui valide le format d'un numéro de téléphone
  function validatePhoneNumber(str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(str);
  }

  const history = useHistory();

  const stageSubmitHandler = async (event) => {
    event.preventDefault();

    
    if (
      !containsNumbers(saisieTitre) &&
      !containsNumbers(saisieNomPersonneContact) &&
      respectMailFormat(saisieCourrielPersonneContact) &&
      validatePhoneNumber(saisieNumeroPersonneContact) &&
      containsNumbers(saisieRemuneration) &&
      containsNumbers(saisieAdresse)
    ) {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/stages",
          "POST",
          JSON.stringify({            
            nomPersonneContact: saisieNomPersonneContact,
            courrielPersonneContact: saisieCourrielPersonneContact,
            numeroPersonneContact: saisieCourrielPersonneContact,
            adresseEntreprise: saisieAdresse,
            typeDeStage: saisieTypeStage,
            nbPostesDispo: saisieNbPoste,
            description: saisieTitre,
            remuneration: saisieRemuneration
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
  };

  return (
    <div>
      <form onSubmit={stageSubmitHandler}>
        <h3>Ajouter un stage</h3>

        <div>
          <label>Titre du stage: </label>
          <input
            type="text"
            value={saisieTitre}
            onChange={saisieTitreHandler}
            className="champ-formulaire"
            placeholder="Stage en développement web"
            required
            minLength={5}
          />
          {containsNumbers(saisieTitre) && (
            <p>Entrez un titre valide qui ne contient que des lettres.</p>
          )}
        </div>

        <div>
          <label>Nom du recruteur: </label>
          <input
            type="text"
            value={saisieNomPersonneContact}
            onChange={saisieNomHandler}
            placeholder="Marck Ganier"
            required
            minLength={5}
          />
          {containsNumbers(saisieNomPersonneContact) && (
            <p>Entrez un nom valide qui ne contient que des lettres.</p>
          )}
        </div>

        <div>
          <label>Numéro du recruteur: </label>
          <input
            type="text"
            value={saisieNumeroPersonneContact}
            onChange={saisieNumeroHandler}
            placeholder="(000) 000 0000"
            required
            minLength={10}
          />
          {!validatePhoneNumber(saisieNumeroPersonneContact) && (
              <p>Entrez un numéro valide qui ne contient que des chiffres.</p>
            )}
        </div>

        <div>
          <label>Courriel du recruteur: </label>
          <input
            type="text"
            value={saisieCourrielPersonneContact}
            onChange={saisieCourrielHandler}
            placeholder="mark@hotmail.com"
            required
            minLength={5}
          />
          {!respectMailFormat(saisieCourrielPersonneContact) && (
            <p>Entrez un courriel valide qui respecte le format.</p>
          )}
        </div>

        <div>
          <label>Adresse de l'entreprise: </label>
          <input
            type="text"
            value={saisieAdresse}
            onChange={saisieAdresseHandler}
            placeholder="21 Rue Lucien-paiement, Laval, Qc"
            required
            minLength={5}
          />
          {!containsNumbers(saisieAdresse) && <p>Entrez une adresse valide.</p>}
        </div>

        <div>
          <label>Type de stage: </label>
          <select>
            <option value={saisieTypeStage} onChange={saisieTypeStageHandler}>
              Réseaux
            </option>
            <option value={saisieTypeStage} onChange={saisieTypeStageHandler}>
              Développement des applications
            </option>
          </select>
        </div>

        <div>
          <label>Nombre de postes: </label>
          <input
            type="number"
            value={saisieNbPoste}
            onChange={saisieNbPostesHandler}
            placeholder="1"
            required
            minLength={1}
          />
          {!containsOnlyNumbers(saisieNbPoste) && (
            <p>Entrez un nombre valide.</p>
          )}
        </div>

        <div>
          <label>Rémunération: </label>
          <input
            type="text"
            value={saisieRemuneration}
            onChange={saisieRemunerationHandler}
            placeholder="25 $/h"
            required
            minLength={1}
          />
          {!containsNumbers(saisieRemuneration) && (
            <p>Entrez un salaire. valide.</p>
          )}
        </div>

        <Button type="submit">Ajouter un stage!</Button>
      </form>
    </div>
  );
};
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
