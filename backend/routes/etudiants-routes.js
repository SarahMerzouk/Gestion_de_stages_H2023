const express = require("express");

const controleursEtudiant = require("../controllers/etudiants-controlleurs")
const router = express.Router();

// permet d'ajouter un étudiant
router.post('/', controleursEtudiant.ajouterEtudiant);

//Renvoie tout les étudiants
router.get('/', controleursEtudiant.getEtudiants);

// permet d'ajouter un étudiant à un stage
router.post('/inscription/', controleursEtudiant.inscrireEtudiantAuStage);

module.exports = router;
