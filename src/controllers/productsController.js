//apontamento do model que criamos para as products
//const { JsonWebTokenError } = require('jsonwebtoken');
const {Products} = require('../models/products');
//const SECRET = process.env.SECRET;
//const jwt = require('jsonwebtoken');

const getAll = (req, res) => {
  
  Products.find(function(err, product){
      if(err) { 
        return res.status(500).send({ message: err.message })
      }
        return res.status(200).send(product);
    });
};

const getByKit = (req, res) => {
  
  Products.find(function(err, product){
    if(err) { 
      return res.status(500).send({ message: err.message })
    }
      return res.status(200).send(product.filter(product => product.kit==(true)));
  });
};


const postProducts = (req, res) => {
  
  let product = new Products(req.body);

  product.save(function(err){
    if(err) { 
      return res.status(500).send({ message: err.message })
    }
      return res.status(201).send(product);
  });  
};

module.exports = {
  getAll,
  getByKit,
  postProducts
};
