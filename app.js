const express = require('express');
const app = express();
const port = 4040;

// app.use(bodyParser.urlencoded({ extended: false }))
const bodyParser = require('body-parser')

const productsRouter = require ("./routes/products");

const dbConnect = require ("./database/dbConection");


app.use("/products", productsRouter);
// app.use(express.json());

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


// levanta el servidor
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});

dbConnect();


// marcos.1891@outlook.com