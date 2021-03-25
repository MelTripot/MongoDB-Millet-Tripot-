const mongoose = require('mongoose')
const schema = mongoose.Schema

const UtilisateurShema = new schema({
    nom: { type: String },
    prenom: { type: String },
    email: { type: String },
    motDePasse: { type: String },
    participationsRef: [{
        montant: Number,
        utilisateur:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'utilisateur'
        }
    }],
    projetsSuivisRef: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projet'
    }],
})

module.exports = mongoose.model('utilisateur', UtilisateurShema)