const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantShema = new Schema({
    noDa:{type: String, required: true},
    nom: {type: String, required: true},
    courriel: {type: String, required: true},
    profil: {type: String, required: true},// réseaux ou programmation

    // je l'ai enlevé, car cela me faisait une erreur quand j'ajoutais un nouvel étudiant
    // faut trouver un moyen de vérifier si un étudiant a un stage pour lui en affecter un
    //stage:{type: mongoose.Types.ObjectId, required: true, ref:"Stage"} // stage auquel il est affecté
});

module.exports = mongoose.model("Etudiant", etudiantShema);