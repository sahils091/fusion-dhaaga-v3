const express = require("express");
const cors = require("cors");
const app = express();
const mysql    = require('mysql');
const products = require("./data/products.json");
const mens = require("./data/mens.json");
const women = require("./data/women.json");
const userMessage = require("./data/userMessage.json");

require("dotenv").config();
app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.static("assets"));


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'fusion-data'
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

app.get("/", (req, res) => {

   res.status(200).json(products);

  //  connection.connect();

  //  connection.query('SELECT * FROM all-products LIMIT 0, 10', function (error, results, fields) {
  //    if (error) throw error;
  //    res.send(results)
      
  //  });
  //  connection.end();

  //=++++ Error Message=======
// when Calls Made one at a time 

// code: 'ER_PARSE_ERROR',
//   errno: 1064,
//   sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'all-products' at line 1",
//   sqlState: '42000',
//   index: 0,
//   sql: 'SELECT * FROM all-products;'

//when Both Calls Made together 

// code: 'PROTOCOL_ENQUEUE_AFTER_QUIT',
// fatal: false  
})




app.get("/new", (req, res) => {
 
   connection.connect();

  connection.query('SELECT * FROM new_products LIMIT 0, 10', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
     
  });
  connection.end();
  
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






//=++++ Error Message=======
// when Calls Made one at a time 

// code: 'ER_PARSE_ERROR',
//   errno: 1064,
//   sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'all-products' at line 1",
//   sqlState: '42000',
//   index: 0,
//   sql: 'SELECT * FROM all-products;'

//when Both Calls Made together 
// code: 'PROTOCOL_ENQUEUE_AFTER_QUIT',
// fatal: false
