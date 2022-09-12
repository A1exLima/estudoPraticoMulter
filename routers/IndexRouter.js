// Requizicao do modulo NPM Express
const express = require('express');

// Confiuracao do modulo express para chamar como função como router
const router = express.Router();

// Requisicao do IndexController dentro da pasta controller
const IndexController = require('../controllers/IndexController');

// Rota para página HOME
router.get('/', IndexController.index);

// Rotas para as páginas do METODO POST (trabalhando com a biblioteca NPM multer)
router.get('/cadastro', IndexController.formRegistro);
router.post('/cadastro', IndexController.processamentoFormRegistro);

// Exportando o index router para ser usado no IndexController
module.exports = router; 