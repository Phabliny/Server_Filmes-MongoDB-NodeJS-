const filmesTeste = require('../models/filmesSchema')

const getFilmes =  (req,res) => {
    console.log(req.url)
    filmesTeste.filmesCollection.find((error, maravilhosa) =>{
        if(error){
            return res.status(500).send(error)
        } else{
            return res.status(200).send(maravilhosa)
        }
    })
}
//getMaravilhosaById
const getFilmesById =  (req,res) => {
   const idParam = req.params.id
   filmesTeste.filmesCollection.findById(idParam, (error, filme) =>{
       if(error){
           return res.status(500).send(error)
       } else {
           if(filme){
               return res.status(200).send(filme)
           } else{
               return res.status(404).send("Filme não encontrado! :( ")
           }
       }
   }) 
}

//addMaravilhosa 
const addFilme = (req,res) => {
    console.log(req.url)
    const filmeBody = req.body
    const filme = new maravilhosaTeste.filmesCollection(filmeBody)

    filme.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(201).send(filme)
        }
    })
}

//updateMaravilhosa 
const updateFilme = (req, res) => {
    const idParam = req.params.id
    const filmeBody = req.body
    const novo = {new: true} //quando o documento for inserido vai retornar o valor modificado e não o original, que é o que acontece por padrão

    filmesTeste.filmesCollection.findByIdAndUpdate(
        idParam,
        {$set:{filmeBody}}, // adicionei o $set pra mostrar como ficaria, para o caso de não passar valores para todos os atributos novamente.
        novo,
        (error, filme) =>{
            if(error){
                return res.status(500).send(error)
            } else if (filme) {
                return res.status(200).send(filme) 
            } else{
                return res.sendStatus(404)
            }
        }
    )    
}

//deleteMaravilhosa
const deleteFilme = (req, res) => {
    const idParam = req.params.id
    filmesTeste.filmesCollection.findByIdAndDelete(idParam, (error, filme) =>
    {
        if(error){
            return res.status(500).send(error)
            } else{
                if(filme){
                    return res.status(200).send("O filme foi apagado")
                }else {
                    return res.sendStatus(404)
                }
            }
        })
    } 

module.exports = {
    getFilmes,
    getFilmesById,
    addFilme,
    updateFilme,
    deleteFilme
}