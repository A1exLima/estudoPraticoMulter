// Requizicao do modulo NPM Express
const express = require('express');

// Confiuracao do modulo express para chamar como função como router
const router = express.Router();

// Requisicao do IndexController dentro da pasta controller
const IndexController = require('../controllers/IndexController');

// Rota para página HOME
router.get('/', IndexController.index);

// Rotas para as páginas do METODO POST
router.get('/registro', IndexController.formRegistro);
router.post('/registro', IndexController.processamentoFormRegistro);

// Exportando o index router para ser usado no IndexController
module.exports = router; 