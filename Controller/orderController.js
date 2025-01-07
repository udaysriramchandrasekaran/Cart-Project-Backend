 const OrderModel= require('../Models/orderModel');
 const ProductModel= require('../Models/productModel');

//POST : api/v1/createOrder
exports.createOrder=async (req,res,next)=>{
   const cartItems= req.body;
   const amount = Number(cartItems.reduce((acc,item)=>(acc+ item.product.price * item.qty),0)).toFixed(2)
   const status ='Pending'
   const order= await  OrderModel.create({cartItems,amount,status});
  
    // Updating product stock
    cartItems.forEach(async (item)=> {
        const product = await ProductModel.findById(item.product._id);
        product.stock = product.stock - item.qty;
        await product.save();
    })
 //change to check git 
    res.json({
        success:true,
        order,
        message: 'Order Created Sccussefully!!'
    })
}




