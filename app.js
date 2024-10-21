const express = require('express')
const app =express();
const dotenv =require('dotenv')
const path =require('path')
const Product =require('./Routes/product')
const Order=require('./Routes/order');
const connectDatabase= require('./Config/configDatabase');
const cors =require('cors')
dotenv.config({path:path.join(__dirname,'Config','config.env')}) //connect env file with app.js
 


//Database connection

connectDatabase();

//Port connection 
app.listen(process.env.PORT,async ()=>{
console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})


//Middle ware 
app.use(express.json()); //data we are passing as json file to indicate to backend 


//Middle ware to hit api from frontend -cors

app.use(cors());


//Router connection 

app.use('/api/v1',Product);
app.use('/api/v1',Order)

