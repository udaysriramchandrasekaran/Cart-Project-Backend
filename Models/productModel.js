const mongoose = require('mongoose');

const ProductSchema =   new mongoose.Schema({
    name: { type: String, required: [true, 'Product name is required'] },
    price: { type: Number, required: [true, 'Product price is required'] },
    description: { type: String, required: [true, 'Product description is required'] },
    rating: { type: Number, required: [true, 'Product rating is required'] },
    category: { type: String, required: [true, 'Product category is required'] },
    seller: { type: String, required: [true, 'Product seller is required'] },
    stock: { type: Number, required: [true, 'Product stock is required'] },
    numOfReviews: { type: Number, required: [true, 'Number of reviews is required'] },
    images: [{ image: String }],
    createdAt: { type: Date, default: Date.now }
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
