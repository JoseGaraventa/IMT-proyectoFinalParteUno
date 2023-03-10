const mongoose = require ("mongoose");
require("dotenv").config();

const dbConnect = async () =>{
    try {
    await mongoose.connect(process.env.MONGO_URL);

console.log("conectado a la base de dstos....");

    } catch (error) {
    throw new Error ("Nose pudo conectar con la base de datos");
    }
}

module.exports= dbConnect;