const mongoose  = require('mongoose')
const schema    = mongoose.Schema 

const UtilisateurShema = new schema({
    nom: { type: String, required: 'Nom obligatoire.' },
    Prenom: { type: String, required: 'Prenom obligatoire.' },
    Email: { type: String, required: 'Email obligatoire.' },
    MotDePasse: { type: String, required: 'Mot de passe obligatoire.' },
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