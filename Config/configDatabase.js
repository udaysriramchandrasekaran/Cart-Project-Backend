const Mongoose= require('mongoose');


const connectDatabase =()=>{
Mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Mongo DB connect Successfully!'+ process.env.DB_URL)
})
}


module.exports=connectDatabase;