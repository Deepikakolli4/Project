const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require("dotenv").config();
const uri = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(cors());

const authRouter = require('./Routers/authRouter');
const restaurantRouter = require('./Routers/restaurantRouter')
const connectDB = require('./db');

app.listen(8000,function (){
  console.log('server running on '+ 8000)
});

app.get('/', function(req,res){
    res.send("Hello world")
})


app.use('/user',authRouter)
app.use('/restaurant',restaurantRouter)

connectDB();




