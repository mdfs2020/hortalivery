const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const controllerSales = require("../controllers/salesController");
//process.env.PATH

router.get("/", controller.getAll);
router.get("/kits", controller.getByKit);
router.post("/", controller.postProducts);
router.put("/", controller.putProduct);
router.delete("/", controller.deleteproduct);
router.post("/sales", controllerSales.postSales);
router.post("/sales/itens", controllerSales.postItemSales);
router.get("/sales/concluded", controllerSales.getConcludedSales);
router.get("/sales/canceled", controllerSales.getCanceledSales);

module.exports = router; 