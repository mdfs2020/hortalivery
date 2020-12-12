  
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Reprograma - On7 Backend - ToDo List",
    theme: "Hortalivery",
    summary: "API com foco em estimular as pessoas a consumirem alimentos saudáveis com praticidade",
    version: "1.0.0"
  });
});

module.exports = router;