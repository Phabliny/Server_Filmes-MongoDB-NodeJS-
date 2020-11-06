const express = require('express');
const router = express.Router();
const controller = require('../controllers/filmesController')

router.get('/filmes', controller.getFilmes)

router.post('/filmes', controller.addFilme)

router.get('/filmes/:id', controller.getFilmesById)

router.put('/fimes/:id', controller.updateFilme)

router.delete('/fimes/:id', controller.deleteFilme)

module.exports = router;