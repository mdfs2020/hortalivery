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

const putProduct = (req, res) => {
  const idProduct = req.body._id;

  Products.findByIdAndUpdate(idProduct, req.body, { new: true }, (err, product) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    };
    if (!product) {
      return res.status(404).send('Produto não encontrado');
    } else {
      return res.status(200).send('Produto alterado com sucesso');
    };
  });
};

const deleteproduct = (req, res) => {
  const idProduct = req.body._id;

  Products.findByIdAndDelete(idProduct, err => {
    if(err){
      return res.status(500).send({ message: err.message });
    };
      return res.status(200).send('Produto removido com sucesso');
  });
};


module.exports = {
  getAll,
  getByKit,
  postProducts,
  putProduct,
  deleteproduct
};