const Product = require("../models/Products");

const validationProductName = async (req, res, next) =>{
    const product = await Product.findOne({productname: req.body.productname} );

    if (product){
        res.status(400).json({msg:"Ya existe un producto con ese nombre"});
    } else {
        next();
    }
}


module.exports= validationProductName;
