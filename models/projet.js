const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ProjetSchema=new schema({
    nom : { type:String, lowercase: true, required: 'Veuillez donner un nom a votre projet'},    
    categories:[String],
    palier:{ type: Number,required: 'Veuillez donner pallier votre projet'},
    montantActuel:{type:Number},
    datedefin:{type:Date},
    isMisEnAvant:{type:Boolean},
    participant:[String]
})

module.exports = mongoose.model('projet', ProjetSchema)