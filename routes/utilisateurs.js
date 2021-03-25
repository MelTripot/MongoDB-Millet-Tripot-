const { ObjectId } = require('bson')
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

// Modifie un utilisateur ainsi que la participation ou pour suivre un projet
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

router.get('/', (req, res) => {
    Utilisateur.find({}).populate({ path: "participationsRef.projet" })
        .then(user => res.send(user))
        .catch(err => console.log(err))
})

// Réupéré la somme des participations pour un projet
router.get("/get-montant/:_id", (req, res) => {
    const projectId = req.params._id

    Utilisateur.aggregate([
        {
            $unwind: {
                path: "$participationsRef"
            }
        },
        {
            $group: {
                _id: "$participationsRef.projet",
                montantActuel: { $sum: "$participationsRef.montant" }
            }
        },
        {
            $match: {
                "_id": ObjectId(projectId)
            }
        }

    ]).then(montant => res.send(montant))
        .catch(error => console.error(error))
})

module.exports = router