const express=require('express');
const { createOrder } = require('../Controller/orderController');
const route=express.Router();


route.route('/createOrder').post(createOrder);



module.exports=route;