const express=require('express')
const router=express.Router()

const Projet=require('../models/Projet')



// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/projets/
// [GET] localhost:5000/projets/
router.get("/",(req,res)=>{

    const limit = req.query.limit;
    const {nom } = req.query;
    Projet.find({nom})
    .then(projets=>res.send(projets))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/projets
// [POST] localhost:5000/projets
router.post("/",(req,res)=>{
    const { nom,categories,palier }=req.body
    const newProjet=new Projet({
        nom,categories,palier
    })
    newProjet.save()
    .then(projets=>res.send(projets))
    .catch(err=>console.log(err))
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/projets/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/projets/6055c2a61bcfb139a404b3a0
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    Projet.findOne({_id:_id})
      .then(projet=>res.send(projet))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/projets/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const {name,email,phone}=req.body
    Projet.findOneAndUpdate({_id:_id},{name,email,phone})
    .then(projets=>res.send("projet Updated"))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/projets/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Projet.findOneAndDelete({_id:_id})
    .then(projets=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
