const express = require ("express");
const { check } = require("express-validator");
const router = express.Router();
const Controllers = require ("../controllers/productsControllers");
const validationProductName = require("../middleWares/validationProductName");


router.get("/",Controllers.getProducts);
router.get("/buscar",Controllers.getProductsByName);
router.get("/:id", Controllers.getProductsById);

router.post("/registrar", validationProductName, 
[
check("productName")
    .not()
    .isEmpty()
    .withMessage("El nombre del producto es obligatorio"),
check("productId")
    .not()
    .isEmpty()
    .withMessage("El ID del producto es obligatorio")
    .isNumeric().withMessage("El caracter del ID debe ser numerico")
    .isLength({max:10}).withMessage("El numero de ID debe tener un maximo de diez caracteres")
],
Controllers.postProducts);


router.put("/actualizar/:id", Controllers.updateProducts);

router.delete("/borrar/:id", Controllers.deleteProducts);



module.exports=router;