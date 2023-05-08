const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantShema = new Schema({
    noDa:{type: String, required: true},
    nom: {type: String, required: true},
    courriel: {type: String, required: true},
    profil: [{type: mongoose.Types.ObjectId, required: true, ref:"Stage"}] // les stages qu'ils sont affecté
});

module.exports = mongoose.model("Etudiant", etudiantShema);