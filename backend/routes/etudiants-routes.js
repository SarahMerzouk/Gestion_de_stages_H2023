const express = require("express");

const controleursEtudiant = require("../controllers/etudiants-controlleurs")
const router = express.Router();

// permet d'ajouter un étudiant, le profil (stages inscrits) est vide lors de l'ajout
router.post('/', controleursEtudiant.ajouterEtudiant);

// permet d'ajouter un étudiant à un stage
router.post('/inscription', controleursEtudiant.inscrireEtudiantAuStage);

module.exports = router;
