//apontamento do model que criamos para as products
//const { JsonWebTokenError } = require('jsonwebtoken');
const products = require('../models/products');
//const SECRET = process.env.SECRET;
//const jwt = require('jsonwebtoken');

const getAll = (req, res) => {
  
    products.find(function(err, products){
      if(err) { 
        return res.status(500).send({ message: err.message })
      }
        return res.status(200).send(products);
    });
};

const postProducts = (req, res) => {
  
  let Products = new products(req.body)

  Products.save(function(err){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(201).send(Products.toJSON())
  });
  
};

module.exports = {
  getAll,
  postProducts
};
