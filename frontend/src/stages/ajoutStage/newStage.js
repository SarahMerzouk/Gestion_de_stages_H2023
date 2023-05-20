import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import "./newStage.css";

const NewStage = () => {
  const [saisieNomPersonneContact, setSaisieNomPersonneContact] = useState("");
  const [saisieCourrielPersonneContact, setSaisieCourrielPersonneContact] =
    useState("aa@aa.com");
  const [saisieNumeroPersonneContact, setSaisieNumeroPersonneContact] =
    useState("514 000 0000");
  const [saisieAdresse, setSaisieAdresse] = useState(
    "21 Rue Lucien-paiement, Laval, Qc"
  );
  const [saisieTypeStage, setSaisieTypeStage] = useState("");
  const [saisieNbPoste, setSaisieNbPoste] = useState(0);
  const [saisieTitre, setSaisieTitre] = useState("");
  const [saisieRemuneration, setSaisieRemuneration] = useState("25 $/h");
  const { error, sendRequest, clearError } = useHttpClient();
  const [enEdition, setEnEdition] = useState(false);

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

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

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
            remuneration: saisieRemuneration,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        console.log(responseData.message);

        history.push("/");

        if (responseData.message === "ajout d'un stage réussie!") {
          alert("Le stage a été ajouté avec succès!")
        } else {
          alert("L'ajout de stage n'a pas fonctionné! \n Veuillez communiquer avec Sylvain Labranche. \n Son courriel est: sylvain.labranche@cmontmorency.qc.ca")
        }

      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <React.Fragment>
      <div>
        {!enEdition && (
          <button onClick={debutEditionHandler} className="buttonEditionDebut">
            Ajouter un nouveau stage!
          </button>
        )}

        {enEdition && (
          <form onSubmit={stageSubmitHandler} className="form-control">
            <ErrorModal error={error} onClear={clearError} />

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
                <p className="erreur">
                  Entrez un titre valide qui ne contient que des lettres.
                </p>
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
                <p className="erreur">
                  Entrez un nom valide qui ne contient que des lettres.
                </p>
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
                <p className="erreur">
                  Entrez un numéro valide qui ne contient que des chiffres.
                </p>
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
                <p className="erreur">
                  Entrez un courriel valide qui respecte le format.
                </p>
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
              {!containsNumbers(saisieAdresse) && (
                <p className="erreur">Entrez une adresse valide.</p>
              )}
            </div>

            <div>
              <label>Type de stage: </label>
              <select
                className="programme-select"
                value={saisieTypeStage}
                onChange={saisieTypeStageHandler}
                required
              >
                <option value="" disabled defaultValue>
                  Choisissez une option
                </option>

                <option value="Réseaux">Réseaux</option>

                <option value="Développement des applications">
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
                <p className="erreur">Entrez un nombre valide.</p>
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
                <p className="erreur">Entrez un salaire valide.</p>
              )}
            </div>

            <button type="submit">Ajouter un stage!</button>
            <button type="button" onClick={arretEditionHandler}>
              Annuler
            </button>
          </form>
        )}

      </div>
    </React.Fragment>
  );
};

export default NewStage;
