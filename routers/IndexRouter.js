// Requizicao do modulo NPM Express
const express = require('express');

// Requisicao do IndexController dentro da pasta controller
const IndexController = require('../controllers/IndexController');

// Requizicao do Método Multer para trabalhar com processamento de arquivos do lado do servidor
const multer = require('multer');

// Requisicao do Middleware multerDiskStorage
const multerDiskStorage = require('../middlewares/multerDiskStorage');

// Confiuracao do modulo express para chamar como função como router
const router = express.Router();

// Rota para página HOME
router.get('/', IndexController.index);

// Funcao que ira receber os dados e passar para o storage fazer o trabalho de destination e filename
const upload = multer({ storage: multerDiskStorage});

// Rotas para as páginas do METODO POST (trabalhando com a biblioteca NPM multer)
router.get('/cadastro', IndexController.formRegistro);

// No segundo parametro temos o middleware de rota para chamar a funcao multer onde indicamos o caminho onde sera salvo o arquivo
// e nome desse arquivo
router.post('/cadastro', upload.single('imagemUsuario'), IndexController.processamentoFormRegistro);

// Exportando o index router para ser usado no IndexController
module.exports = router; 