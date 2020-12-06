const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientsController");
//process.env.PATH

router.get("/", controller.getAll);
router.post("/", controller.postClients);
router.post('/login', controller.login);

module.exports = router; 