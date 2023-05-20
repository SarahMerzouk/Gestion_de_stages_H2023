const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");
const Stage = require("../models/stage");
const Etudiant = require("../models/etudiant");
const etudiant = require("../models/etudiant");

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
        profil,
        stage: [], // il est affecté à aucun stage au début
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

const getEtudiants = async (requete, reponse, next) => {
    let etudiants;
  
    try {
      etudiants = await Etudiant.find({});
    } catch {
      return next(new HttpErreur("Erreur accès stages"), 500);
    }
  
    reponse.json({
      etudiants: etudiants.map((etudiant) =>
        etudiant.toObject({ getters: true })
      ),
    });
  };

const inscrireEtudiantAuStage = async (requete, reponse, next) => {
    let etudiantId = requete.params.etudiantId; // quel étudiant on inscrit
    const {description} = requete.body; // le titre du stage
    let unEtudiant;
    let unStage;

    try {
        unEtudiant = await Etudiant.findById(etudiantId).populate("stage");
    } catch {
        return next(new HttpErreur("Erreur lors de la vérificaton de l'étudiant!", 500));
    }

    try {
        unStage = await Stage.findOne({description: description});
        console.log(unStage);
    } catch {
        return next(new HttpErreur("Erreur lors de la vérificaton du stage!", 500));
    }
    
    // si l'étudiant n'existe pas
    if (!unEtudiant) {
        return next(new HttpErreur("L'étudiant n'existe pas!", 404));
    }

    // si le stage n'existe pas
    if (!unStage) {
        return next(new HttpErreur("Le stage n'existe pas!", 404));
    }
    
    // vérifier si l'étudiant est déjà inscrit à un stage
    if (unEtudiant.stage.length > 0) {
        return next(new HttpErreur("L'étudiant est déja inscrit à un stage!", 422));
    }

    // si le stage n'a plus de postes disponibles
    if (unStage.nbPostesDispo == 0) {
        return next(new HttpErreur("Le stage n'a plus de postes disponobles", 422));
    }

    try{
        // ajout du stage à l'étudiant et sauvegarde dans la base de données
        unEtudiant.stage.push(unStage);
        await unEtudiant.save();

        // diminuer le nombre de postes disponibles au stage en question
        unStage.nbPostesDispo = unStage.nbPostesDispo - 1;
        unStage.save();
    } catch {
        return next(new HttpErreur("Erreur lors de l'inscription de l'étudiant au stage!", 422));
    }

    // réponse en json
    reponse.json({ message: "ajout d'un étudiant à un stage est réussie!" });
};

exports.ajouterEtudiant = ajouterEtudiant;
exports.getEtudiants = getEtudiants;
exports.inscrireEtudiantAuStage = inscrireEtudiantAuStage;