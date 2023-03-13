const express = require ("express");
const router = express.Router();
const apiExternalController = require ("../controllers/apiExternalContreoller");

router.get("/", apiExternalController.getExternalComments);


module.exports= router;