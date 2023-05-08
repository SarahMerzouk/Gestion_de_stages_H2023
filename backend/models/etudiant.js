const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantShema = new Schema({
    noDa:{type: String, required: true},
    nom: {type: String, required: true},
    courriel: {type: String, required: true},
    profil: {type: String, required: true} // le programme de l'étudiant? besoin de clarification
});

module.exports = mongoose.model("Etudiant", etudiantShema);