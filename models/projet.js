const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ProjetSchema=new schema({
    nom : { type:String, lowercase: true, required: 'Veuillez donnez un nom a votre projet'},    
    categories:[String],
    palier:{ type: Number, default: false },
})