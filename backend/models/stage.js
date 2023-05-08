const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stageShema = new Schema({
    nomPersonneContact:{type: String, required: true},
    courrielPersonneContact: {type: String, required: true},
    numeroPersonneContact: {type: String, required: true},
    adresseEntreprise: {type: String, required: true},
    typeDeStage:{type: String, required: true},  // faire une liste déroulante (réseaux ou programmation)
    nbPostesDispo:{type: Number, required: true}, // nombre de postes disponibles
    description:{type: String, required: true},
    remuneration:{type: Number, required: true} // salaire horaire,unique ou aucun (une liste déroulante)
});

module.exports = mongoose.model("Stage", stageShema);