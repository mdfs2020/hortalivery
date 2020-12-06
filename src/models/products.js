const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const ProductsSchema = new mongoose.Schema({
    name : { type: String },
    category: { type: String },
    kit: { type: Boolean },
    amount: {type: Number}
},
{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const Products = mongoose.model('Products', ProductsSchema);

// exportar o model para ser utilizado
module.exports = Products;