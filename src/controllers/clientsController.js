const clients = require('../models/clients');
const SECRET = process.env.SECRET;

const getAll = (req, res) => {
    
    clients.find(function(err, client){
      if(err) { 
        return res.status(500).send({ message: err.message })
      }
        return res.status(200).send(client);
    });
};

const postClients = (req, res) => {

const client = new clients(req.body);

  client.save(function(err){
    if(err) { 
      return res.status(500).send({ message: err.message })
    }
      return res.status(201).send(client);
  })
};

const login = (req, res) => {

  clients.findOne( { email: req.body.email }, (err, client) => {
    if (!client) {
      return res.status(404).send(`Email ${req.body.email} não encontrado`);
    };

    const senhaValida = '';
    
    if (!senhaValida) {
      return res.status(403).send('Senha incorreta');
    }else{

    /*const token = jwt.sign({ email: req.body.email}, SECRET);
      return res.status(201).send(token);*/
    }
  });
};

module.exports = {
  getAll,
  postClients,
  login
};