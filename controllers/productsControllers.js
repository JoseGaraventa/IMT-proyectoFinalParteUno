const { find, findByIdAndUpdate } = require("../models/Products");
const Products = require ("../models/Products");
const {validationResult} = require ("express-validator");


const getProducts= async (req, res)=>{
    const products = await Products.find();

    res.status(200).json({products, msg:"ok"});
    }

const getProductsById= async (req,res)=>{

    const products = await Products.findById(req.params.id);

    if (products!==undefined && products!==null)
    {res.status(200).json({products:products, msg:"Ok"});}
    else 
    {res.status(404).json({products:null, msg:"El producto no ha sido encontrado"})}
    
}

const getProductsByName= async (req,res)=>{
    const products = await Products.findOne({productName: req.query.products}); 

    if (products!==undefined && products!==null)
    {res.status(200).json({products:products, msg:"Ok"});}
    else 
    {res.status(404).json({products:null, msg:"El producto no ha sido encontrado"})}
    
}

const postProducts = async (req, res) => {
    
    try{
        const validationError =  validationResult(req);

        if (validationError.isEmpty()) {
        const products = new Products (req.body);
        await products.save();

        res.status(201).json({
            products: products.productName, 
            msg:"El producto ha sido creado exitosamente :)"});
    }
    else{
        res.status(400).json({msg:"Error al cargar el producto", validationError});
    }

    } catch (error){
        res.status(500).json({products:null, msg:"Hubo un error al crear el porducto"+ error.message});
    }
    
}


const updateProducts = async (req, res ) => {
    try {
        await Products.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({msg:"El producto se ha actualizado exitosamente"});
    } catch (error){
        res.status(500).json({msg:"error al actualizar la lista de productos" + error.message});
    }
}

const deleteProducts = async (req, res) => {
    try{
        await Products.findByIdAndDelete(req.params.id);
        res.status(201).json({msg:"El producto ha sido eliminado"});
    } catch (error) {
        res.status(500).json({msg:"No se pudo borrar correctamente el producto" + error.message});
    }
}

module.exports = {getProducts, getProductsById, getProductsByName, postProducts, updateProducts, deleteProducts}