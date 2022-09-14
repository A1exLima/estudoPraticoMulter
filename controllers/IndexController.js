// Requisicao do modulo nativo file system
const { json } = require('express');
const fs = require('fs');

// Requisicao do banco de dados que contem os usuários e senhas
const registroUsuarios = require('..//dataBase/registroUsuarios.json');

// Requisicao do Middleware multerDiskStorage
const multerDiskStorage = require('../middlewares/multerDiskStorage');

// Objeto Literal ja pronto para exportacao de todos os controllers
module.exports ={

    // PÁGINA HOME - Redenrizacao da página Home
    index: (req, res) =>{
        res.render('index.ejs');
    },

    // Redenrizacao da view form para coleta de dados via Multer
    formRegistro: (req, res) => {
        res.render('cadastro.ejs');

    },

    // Processamento dos dados enviados via multer
    processamentoFormRegistro: (req, res) => {

        if (req.file !== undefined) {

            // Captura dos dados (NOME USUÁRIO E SENHA) enviados via Método Post através do req.body e salvamento em uma variavel
            let dados = req.body;

            // Inclusao do nome do arquivo da imagem do usuário
            dados.avatarUsuario = req.file.filename;

            // Inclusao do nome de usuario e senha da ultima posicao do array do banco de dados onde é guardado todos os usuarios e senhas
            registroUsuarios.push(dados);

            // conversao dos dados em tipo Json, e atraves da funcao nativa fs o salvamento desses dados dentro da database em formato json
            fs.writeFileSync('./database/registroUsuarios.json', JSON.stringify(registroUsuarios, null, 4));

            res.render('confirmacaoRegistro.ejs');

        } else {

            return res.render('imagemNaoEnviada.ejs');
        }

        

    }

}

// Dúvida, Perguntar ao professor como faz para capturar somente o nome da imagem salva e gravar no database registroUsuários