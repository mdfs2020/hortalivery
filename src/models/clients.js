const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const clientsSchema = new mongoose.Schema({
    name : { type: String },
    email: { type: String },
    senha: { type: String }
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const clients = mongoose.model('clients', clientsSchema);

// exportar o model para ser utilizado
module.exports = {
    clients,
    clientsSchema
};