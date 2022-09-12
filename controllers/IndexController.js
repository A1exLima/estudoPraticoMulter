// Objeto Literal ja pronto para exportacao de todos os controllers
module.exports ={

    // PÁGINA HOME - Redenrizacao da página Home
    index: (req, res) =>{
        res.render('index.ejs');
    },

    // Redenrizacao da view form para coleta de dados via Multer
    formRegistro: (req, res) => {
        res.render('registro.ejs');

    },

    // Processamento dos dados enviados via multer
    processamentoFormRegistro: (req, res) => {
        res.send('TESTE');

    }

}