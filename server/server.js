const express = require("express");
const cors = require("cors");
const app = express();

// npm i mysql done
// const mysql    = require('mysql');
const products = require("./data/products.json");
const newProducts = require("./data/newProducts.json");
const mens = require("./data/mens.json");
const women = require("./data/women.json");
const userMessage = require("./data/userMessage.json");

require("dotenv").config();
app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));

//created a connection to the mySQL.
// username and passwords are defaults
// the name Of the database I created using workbench is fusion-data.

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'rootroot',
//   database : 'fusion-data'
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.get("/new", (req, res) => {
  //in my fusion-data db I have one table called new_products with information about the new section being rendered on the front end.

  //this is the Error message I get when I try to run this.

  // //  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  // errno: 1251,
  // sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  // sqlState: '08004',
  // fatal: true

  // connection.connect();
  // connection.query('SELECT * FROM new_products LIMIT 0, 10', function (error, results, fields) {
  //   if (error) throw error;
  //   res.send(results)
  // });
  // connection.end();

  res.status(200).json(newProducts);
});

app.get("/mens", (req, res) => {
  res.status(200).json(mens);
});

app.get("/women", (req, res) => {
  res.status(200).json(women);
});

app.post("/user/message", (req, res) => {
  let newMessage = {
    ...req.body,
  };
  userMessage.push(newMessage);
  res.status(201).json(userMessage);
});
