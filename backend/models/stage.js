const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stageSheme = new Schema({
    nomPersonneContact:{type: String, required: true},
    courrielPersonneContact: {type: String, required: true},
    numeroPersonneContact: {type: String, required: true},
    adresseEntreprise: {type: String, required: true},
    typeDeStage:{type: String, required: true},
    nbPostesDispo:{type: Number, required: true},
    description:{type: String, required: true},
    remuneration:{type: Number, required: true}
});

module.exports = mongoose.model("Stage", stageSheme);