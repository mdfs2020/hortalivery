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

const getByKit = (req, res) => {
  
  products.find(function(err, products){
    if(err) { 
      return res.status(500).send({ message: err.message })
    }
      return res.status(200).send(products.filter(products => products.kit==(true)));
  });
};


const postProducts = (req, res) => {
  
  let Products = new products(req.body);

  Products.save(function(err){
    if(err) { 
      return res.status(500).send({ message: err.message })
    }
      return res.status(201).send(Products.toJSON())
  });  
};

module.exports = {
  getAll,
  getByKit,
  postProducts
};
