const { find } = require("../models/Products");
const Products = require ("../models/Products")


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

const getProductsByName=(req,res)=>{
    const products= db.find(products=>products.username==req.params.username);

    if (products!==undefined && products!==null)
    {res.status(200).json({products:products, msg:"Ok"});}
    else 
    {res.status(404).json({products:null, msg:"El producto no ha sido encontrado"})}
    
}

const postProducts = async (req, res) => {
    try{
        const products = new Products (req.body);
        console.log(products);
        await products.save();
        res.status(201).json({products:products.productName, msg:"El usuario ha sido creado exitosamente :)"})

    } catch (error){
        res.status(500).json({products:null, msg:"Hubo un error al crear el porducto"+ error.message});
    }
    
}

module.exports = {getProducts, getProductsById, getProductsByName, postProducts}