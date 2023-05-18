const express = require("express");

const controleursStage = require("../controllers/stages-controleurs")
const router = express.Router();

// permet d'ajouter un stage
router.post('/', controleursStage.ajouterStage);
router.get('/', controleursStage.getStages);

module.exports = router;
