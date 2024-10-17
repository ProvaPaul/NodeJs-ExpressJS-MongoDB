const express=require('express');
const mongoose = require('mongoose');
const { type } = require('os');

const app=express();
const port=3000;
// found this from mongoose website
// 1.without async await function
//  mongoose.connect('mongodb://127.0.0.1:27017/testProductDB')
// .then(()=>console.log('Connected to MongoDB'))
// .catch((err)=>console.error('Could not connect to MongoDB',err));

// 2.now connect by using async await function(it's better than the previous one because we cn call it from any where in the code)

// id ,title,price,description,date
// 1. create a schema
const productSchema= new mongoose.Schema({
    title:String,
    // {
    //     type:String,
    //     required:true
    //     // required true means it is mandatory to have a title
    // },
    price: Number,
    description:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})
// 2. create a model
const Product=mongoose.model('Products',productSchema);

// 3. create a document
// database->collection(table)->document(row)

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/testProductDB')
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.error('Could not connect to MongoDB',err);
    }
} 


app.get('/',(req,res)=>{    
    res.send('Hello World');
});
app.listen(port,async()=>{
    console.log(`Server is running on port ${port}`);
    await connectDB()
});