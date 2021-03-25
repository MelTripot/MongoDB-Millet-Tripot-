const express = require('express')
const router = express.Router()

const Utilisateur = require('../models/utilisateurModel')

router.post("/", (req, res) => {
    console.log(req.body)
    const { nom, prenom, email, motDePasse, projetsCreesRef, participationsRef, projetsSuivisRef } = req.body

    const newUser = new Utilisateur({
        nom, prenom, email, motDePasse, projetsCreesRef, participationsRef, projetsSuivisRef
    })
    newUser.save()
        .then(user => res.send(user))
        .catch(err => console.error(err))
})

router.get("/:_id", (req, res) => {
    const { _id } = req.params

    Utilisateur.findOne({ _id: _id })
        .then(user => res.send(user))
        .catch(err => console.log(err))
})

router.put("/:_id", (req, res) => {
    const { _id } = req.params
    const { nom, prenom, email, motDePasse, projetsCreesRef, participationsRef, projetsSuivisRef } = req.body

    Utilisateur.findOneAndUpdate(
        { _id: _id },
        {
            nom, prenom, email, motDePasse, projetsCreesRef, participationsRef, projetsSuivisRef
        }
    )
        .then(() => res.send("User Updated"))
        .catch(err => console.log(err))
})

router.delete("/:_id", (req, res) => {
    const { _id } = req.params

    Utilisateur.findOneAndDelete({ _id: _id })
        .then(() => res.send("success"))
        .catch(err => console.log(err))
})

module.exports = router