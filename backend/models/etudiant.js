const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantShema = new Schema({
    noDa:{type: String, required: true},
    nom: {type: String, required: true},
    courriel: {type: String, required: true},
    profil: {type: String, required: true},// réseaux ou programmation
    stage:[{type: mongoose.Types.ObjectId, required: true, ref:"Stage"}] // stage auquel il est affecté
});

module.exports = mongoose.model("Etudiant", etudiantShema);