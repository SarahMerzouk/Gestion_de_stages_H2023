const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");
const Stage = require("../models/stage");
const Etudiant = require("../models/etudiant");

const ajouterEtudiant = async (requete, reponse, next) => {
    const {noDa, nom, courriel, profil} = requete.body;
    let unEtudiant;

    try {
        unEtudiant = await Etudiant.findOne({noDa:noDa});
    } catch {
        return next(new HttpErreur("Erreur lors de la vérification de l'étudiant", 500));
    }

    // si l'étudiant existe, on affiche un message d'erreur
    if (unEtudiant) {
        return next(new HttpErreur("L'étudiant existe déjà!", 422));
    }

    // s'il n'existe pas, on le crée
    let newEtudiant = new Etudiant({
        noDa,
        nom,
        courriel,
        profil
    });

    // on sauvegarde l'étudiant dans la base de donnée
    try{
        await newEtudiant.save();
    } catch {
        return next(new HttpErreur("Erreur lors de la création du stage!", 422));
    }

    // réponse en json
    reponse.json({ message: "ajout d'un étudiant réussie!" });
};

const inscrireEtudiantAuStage = async (requete, reponse, next) => {
    
    // réponse en json
    reponse.json({ message: "ajout d'un étudiant à un stage est réussie!" });
};

exports.ajouterEtudiant = ajouterEtudiant;
exports.inscrireEtudiantAuStage = inscrireEtudiantAuStage;