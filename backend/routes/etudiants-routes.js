const express = require("express");

const controleursEtudiant = require("../controllers/etudiants-controlleurs")
const router = express.Router();

// permet d'ajouter un étudiant
router.post('/', controleursEtudiant.ajouterEtudiant);

// permet d'ajouter un étudiant à un stage
router.post('/inscription/:etudiantId', controleursEtudiant.inscrireEtudiantAuStage);

module.exports = router;
