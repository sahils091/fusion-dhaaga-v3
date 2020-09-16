const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { response } = require('express');

const stripe = require("stripe")("sk_test_51HRet9A1mp6b1b4kjyhU2ZdzzCEInDWDTuVbEw5hSS63q2ibbcS6ASgSs55wUXg2tBUiFeqFF5m5z4z31mKRFPr500XxgHVORc")

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//Api Routes
app.get("/", (req, res)=>{
    res.status(200).json("Hello World")
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request  received >>>>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in Sub units
        currency: "usd",
    })
    response.status(201).json({
        clientSecret: paymentIntent.client_secret,
    })
})


//Listen

exports.api = functions.https.onRequest(app);


//http://localhost:5001/fusion-dhaaga-v1/us-central1/api function emulator: example end point   