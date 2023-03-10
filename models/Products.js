const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema ({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    productId: {
        type: Number,
        required: true,
        unique: true
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productStock: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
    }    
});

const Products = mongoose.model("Products", productsSchema);

module.exports= Products;