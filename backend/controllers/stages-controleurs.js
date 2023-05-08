const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");
const Stage = require("../models/stage");

const ajouterStage = async (requete, reponse, next) => {
    const {nomPersonneContact,
         courrielPersonneContact,
          numeroPersonneContact,
          adresseEntreprise,
          typeDeStage,
          nbPostesDispo,
          description,
          remuneration} = requete.body;

    let unStage;

    try {
        // description est le titre du stage, alors on vérifie si le même poste est donné
        unStage = await Stage.findOne({description : description});
    } catch {
        return next(new HttpErreur("Échec lors de la vérification des stages",500));
    }

    // si le stage existe, on affiche un message d'erreur.
    if (unStage) {
        return next(new HttpErreur("Le stage existe déjà!", 422));
    }

    // si le stage n'existe pas, on le crée
    let nouveauStage = new Stage({
        nomPersonneContact,
        courrielPersonneContact,
        numeroPersonneContact,
        adresseEntreprise,
        typeDeStage,
        nbPostesDispo,
        description,
        remuneration
    });

    // ajout du stage à la base de donnée
    try{
        await nouveauStage.save();
    } catch {
        return next(new HttpErreur("Erreur lors de la création du stage!", 422));
    }

    // réponse en json
   reponse.json({ message: "ajout d'un stage réussie!" });
};

exports.ajouterStage = ajouterStage;
