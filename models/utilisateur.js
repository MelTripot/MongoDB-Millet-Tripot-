const mongoose  = require('mongoose')
const schema    = mongoose.Schema 

const UtilisateurShema = new schema({
    nom: { type: String },
    prenom: { type: String },
    email: { type: String },
    motDePasse: { type: String },
    projetsCreesRef: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projet'
    }],
    participationsRef: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projet'
    }],
    projetsSuivisRef: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projet'
    }],
})

module.exports = mongoose.model('utilisateur', UtilisateurShema)