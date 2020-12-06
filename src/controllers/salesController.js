const sales = require('../models/sales');


const postSales = (req, res) => {
    console.log(req.body.product)
    const sales = new sales(req.body);

    sales.save(function(err){
        if(err) { 
          return res.status(500).send({ message: err.message })
        }
          return res.status(201).send(sales);
      })
    };

    module.exports = {
        postSales
    };