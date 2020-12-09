const mongoose = require('mongoose');
const { ProductsSchema } = require('./products');
const { clientsSchema } = require('./clients');

//estrutura do seu model (atributos da sua entidade)
const SalesSchema = new mongoose.Schema({
    product : ProductsSchema,
    client: clientsSchema,
    situation: { type: String },
    items: [ProductsSchema]
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