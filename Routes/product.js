const express = require('express');
const { getProducts, getSingleProducts, addProduct } = require('../Controller/productController');
 const route=express.Router();


 route.route('/product').get(getProducts);
 route.route('/product/:id').get(getSingleProducts)
 route.route('/addproduct').post( addProduct)



 module.exports=route;