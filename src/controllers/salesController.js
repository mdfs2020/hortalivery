const sales = require('../models/sales');
const {Products} = require('../models/products');
const {clients} = require('../models/clients');


async function  postSales  (req, res)  {
    
    const produto = await Products.find({name: req.body.name});
    const produtos = await Products.find({kit: false});
    if(produto.length == 0) {
      return res.status(404).send({ message: 'Atenção: Produto não localizado!' });
    };

    const client = await clients.find({email: req.body.email});
     
    if(client.length == 0){
      return res.status(404).send({ message: 'Atenção: Cliente não localizado!' });
    }
    req.body.product = produto[0];
    req.body.client = client[0];
    req.body.situation = "Pending";
    const sale = new sales(req.body);

    sale.save(function(err){
        if(err) { 
          return res.status(500).send({ message: err.message })
        }
          const msg = "Atenção: foi selecionado o Kit: "+sale.product.name+'. Selecione '+sale.product.amount+' produtos da lista abaixo, informando sua descrição separada por vírgula. Caso deseje cancelar, informe Cancelar';
          return res.status(201).send({ message: msg, sale, produtos });
      });
    };

    async function  postItemSales  (req, res)  {
      const status = req.body.situation;
      const itens = req.body.itens;
      let busca = [];
      if(itens!=undefined){
         busca = itens.split(',')
      };
      const venda = await sales.find({"client.email": req.body.email,situation: "Pending"});

      if(venda.length == 0){
        return res.status(404).send({ message: 'Atenção: Não foi detectada nenhuma venda com as caracteristicas informadas!' });
      };
      
      if((venda[0].product.amount-venda[0].items.length) < busca.length){
        return res.status(500).send({ message: 'Atenção: Foram informados mais itens do que a quantidade pendente no kit '+(venda[0].product.amount-venda[0].items.length)+', por favor verifique os itens informados!' });
      };

      const produtos = [];
      for (let i = 0; i < busca.length; i++ ) {
        let produtoBusca = await Products.find({name: busca[i]});
        if(produtoBusca.length>0){
          produtos.push(produtoBusca[0]);
        };
      };

      if(produtos.length>0){
        if(venda[0].items.length==0){
          venda[0].items = produtos;
        }else{
          venda[0].items.push(produtos);
        };
      };
      
      const sale = new sales(venda[0]);
      if(status!=undefined && status=="Cancelar venda"){
        sale.situation = "Canceled";
        sale.save();
        const msg = 'Atenção: Venda cancelada com sucesso!';
        return res.status(201).send({ message: msg});
      }

      if((venda[0].product.amount-venda[0].items.length)>0){
        const msg01 = 'Atenção: Este kit é composto por '+venda[0].product.amount+', até o momento foram informados '+(venda[0].items.length)+' itens, para concluir a venda é necessário confirmar o total de itens.';
        sale.save();
        return res.status(201).send({ message: msg01});
      }else if((venda[0].product.amount-venda[0].items.length)==0) {
        sale.situation="Concluded";
      }

      if(sale.situation=="Concluded"){
        sale.save();
        const msg = 'Atenção: Venda concluída com sucesso!';
         return res.status(201).send({ message: msg, produtos});
      };  
    };

    async function  getConcludedSales  (req, res)  {
      const venda = await sales.find({"situation": "Concluded"});
      return res.status(201).send({venda});
    }; 

    async function  getCanceledSales  (req, res)  {
      const venda = await sales.find({"situation": "Canceled"});
      return res.status(201).send({venda});
    }; 

    module.exports = {
        postSales,
        postItemSales,
        getConcludedSales,
        getCanceledSales
    };