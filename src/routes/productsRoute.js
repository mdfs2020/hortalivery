const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
//process.env.PATH

router.get("/", controller.getAll);
router.post("/", controller.postProducts);

module.exports = router; 