const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const controllerSales = require("../controllers/salesController");
//process.env.PATH

router.get("/", controller.getAll);
router.get("/kits", controller.getByKit);
router.post("/", controller.postProducts);
router.post("/sales", controllerSales.postSales);

module.exports = router; 