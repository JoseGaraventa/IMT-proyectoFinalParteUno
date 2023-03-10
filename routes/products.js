const express = require ("express");
const router = express.Router();
const Controllers = require ("../controllers/productsControllers");


router.get("/",Controllers.getProducts);
router.get("/buscar",Controllers.getProductsByName);
router.get("/:id", Controllers.getProductsById);

router.post("/registrar", Controllers.postProducts);

module.exports=router;