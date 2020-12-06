const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const SalesSchema = new mongoose.Schema({
    product : { type: Object },
    client: { type: Object },
    situation: { type: String },
    items: {type: [Object]}
},
{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const Sales = mongoose.model('Sales', SalesSchema);

// exportar o model para ser utilizado
module.exports = Sales;