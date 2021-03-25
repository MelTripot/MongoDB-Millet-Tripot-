const mongoose = require('mongoose')
const schema = mongoose.Schema

const UtilisateurShema = new schema({
    nom: { type: String },
    prenom: { type: String },
    email: { type: String },
    motDePasse: { type: String },
    participationsRef: [{
        montant: { type: Number },
        projet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'projet'
        }
    }],
    projetsSuivisRef: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projet'
    }],
})

module.exports = Utilisateur = mongoose.model('utilisateur', UtilisateurShema)