const express=require('express');
const mongoose = require('mongoose');
const { type } = require('os');

const app=express();
const port=3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// found this from mongoose website
// 1.without async await function
//  mongoose.connect('mongodb://127.0.0.1:27017/testProductDB')
// .then(()=>console.log('Connected to MongoDB'))
// .catch((err)=>console.error('Could not connect to MongoDB',err));

// 2.now connect by using async await function(it's better than the previous one because we cn call it from any where in the code)

// id ,title,price,description,date
// 1. create a schema
const productSchema= new mongoose.Schema({
    title:
    {
        type:String,
        required:true
        // required true means it is mandatory to have a title
    },
    price: {
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
// 2. create a model
const Product=mongoose.model('Products',productSchema);

// connection create a document
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
// create a route
app.post('/products',async(req,res)=>{    
    try{
        // get data from request body
        // const title=req.body.title;
        // const price=req.body.price;
        // const description=req.body.description;
        // create a model
        const newProduct=new Product({
            title:req.body.title,
            price:req.body.price,
            description:req.body.description
        });
        // for storing data in database
        const productData=await newProduct.save();
        res.status(201).send(productData);

    }
    catch(err){
        res.status(400).send({ message:err.message});
    }
});

app.listen(port,async()=>{
    console.log(`Server is running on port ${port}`);
    await connectDB()
});