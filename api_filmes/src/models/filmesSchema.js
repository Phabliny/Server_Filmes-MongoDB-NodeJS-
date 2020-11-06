const mongoose = require('mongoose')
const Schema = mongoose.Schema

const filmesSchema = new Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId, //tipo do dado
        auto: true, //autogerado?
        required: true //é obrigatório?
    },
    Title:{
        type: String,
        required: true
    },
    Year:{
        type: Number,
        required:true 
    },
    Rated:{
        type: String,
        required: true
    },
    Released:{
        type: String,
        required: true
    },
    Genre:{
        type: String,
        required: true
    },
    Director:{
        type: String,
        required: true
    },
    Writer:{
        type: String,
        required: true
    },
    Actors:{
        type: String,
        required: true
    },
    Plot:{
        type: String,
        required: true
    },
    Language:{
        type: String,
        required: true
    },
    Country:{
        type: String,
        required: true
    },
    Awards:{
        type: String,
        required: true
    }

},

{
    collection: "filmes",
    versionKey: false
   
  }
);


const filmesCollection = mongoose.model('filmes', filmesSchema)

module.exports = {filmesCollection}