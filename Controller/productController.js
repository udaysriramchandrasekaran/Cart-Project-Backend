
const ProductModel = require('../Models/productModel')


//GET -api/v1/product
exports.getProducts= async (req,res,next )=>{

    try{
        const query=req.query.keyword?{name :{
            $regex: req.query.keyword,
            $options:'i'
    
        }}:{}

        const products=  await ProductModel.find(query);
             res.json({
            products,
            success:true,
            message:'get  all products working!'
        })
    }catch(error){
        res.json({
            status:false,
            message:error
        })
    }
       
}

//GET by id -api/v1/product/:id
exports.getSingleProducts= async (req,res,next )=>{
    try{

        const singleProduct= await ProductModel.findById(req.params.id)
        res.json({
            singleProduct,
            success:true,
            message:'get single products working!'
        })
    }catch(error){
        res.json({
            status:false,
            message:error.message
        })
   
    }
      
    }

//POST -api/vi/product/addproduct
    exports.addProduct = async (req, res) => {
        const product = req.body; // Expecting a single product object in the request body
        try {
            const newProduct = new ProductModel(product); // Create a new instance of the ProductModel
            await newProduct.save(); // Save the product to the database
            
            res.status(201).json({ success: true, data: newProduct });
        } catch (error) {
            res.status(404).json({ success: false, message: error.message });
        }
    };
    