require('dotenv-safe').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

//Conexão com o mongo
const db = mongoose.connection;

// Captura de erro ou sucesso na conexão
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão realizada com sucesso.")
});

//rotas
const index = require("./routes/index");
const products = require("./routes/productsRoute");
const clients = require("./routes/clientsRoute");


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use("/", index);
app.use("/products", products);
app.use("/clients", clients);

module.exports = app;