const express = require("express");
const cors = require("cors");
const app = express();
const mysql    = require('mysql');
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

   connection.query('SELECT * FROM all_products LIMIT 0, 10', function (error, results, fields) {
     if (error) throw error;
     res.send(results)
      
   });
  
})




app.get("/new", (req, res) => {
 

  connection.query('SELECT * FROM new_products LIMIT 0, 10', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
     
  });
  
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


