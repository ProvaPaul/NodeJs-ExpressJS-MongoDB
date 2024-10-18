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
        required:[true,'product title is required'],
        minlength:[3,"product title must be at least 3 characters long"],
        maxlength:[10,"product title must be at most 10 characters long"],
        uppercase:true,
        trim: true,
        // enum:{
        //     values:['BOOK','LAPTOP','MOBILE','TABLET','WATCH'],
        //     message:'{VALUE} is not supported'
        // }
        // required true means it is mandatory to have a title
    },
    price: {
        type:Number,
        min:[20,"min price is 20"],
        max:[2000,"max price is 2000"],
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
// CRUD-Create,Read,Update,Delete   
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

// read all products// 2. get: /products/:id->Return a specific product
// logical operator
// 1. and operator
// {$and:[{price:{$gt:100}},{price:{$lt:200}}]}
app.get('/products',async(req,res)=>{
    try{
        const { minPrice, maxPrice } = req.query; // Get min and max prices from query parameters
        let products;

        if (minPrice && maxPrice) {
            // Filter products where price is between minPrice and maxPrice
            products = await Product.find({
                price: { $gt: minPrice, $lt: maxPrice }
            // }).sort({ price: -1 });
            // ascending order e korle 1, descending order e korle -1
        }).sort({ price: -1 })

        } else {
            // If no price filter is applied, return all products
            products = await Product.find().sort({ price: -1 })
        }
        // eq,ne,neq,gt,gte,lt,lte,in,nin(find data using comparison query)
        // logical query: or,and,not

        if(products){
            res.status(200).send({
             success:true,
             message:'return all product',
             data:products
            });
        }
        else{
        res.status(404).send({
         success: false,
         message:'Product not found',
        });      
   }
    }
    catch(err){
        res.status(400).send({message:err.message});
    }
});
// 1.get: products->Return all the products(done already above)
// 3.post: /products->Create a new product(done above)

app.get('/products/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const products=await Product.findOne({_id:id});
        // emon id khujbe jeta db er shathe match korbe
        // find array return kore[{},{},{}]
        // findone object return kore{}
        if(products){
                   res.status(200).send({
                    success:true,
                    message:'return single product',
                    data:products
                   });
        }else{
            res.status(404).send({
                success: false,
                message:'Product not found',
               });      
          }
    }
    catch(err){
        res.status(400).send({message:err.message});
    }
});
// delete: /products/:id->Delete a specific product based on id
    app.delete("/products/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const productStatus=await Product.findByIdAndDelete({_id:id})
        if(productStatus){
            res.status(200).send({
             success:true,
             message:'deleted single product',
             data:productStatus
            });
        }
        else{
            res.status(404).send({
            success: false,
            message:'Product not found',
        });      
   }

    }
    catch(err){
        res.status(400).send({message:err.message});
    }
});
//4. put: /products/:id->Update a specific product

app.put('/products/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const title=req.body.title;
        const price=req.body.price;
        const description=req.body.description;

        const updatedproduct=await Product.findByIdAndUpdate({_id:id},{
            $set:{
                title:req.body.title,
                price:req.body.price,
                description:req.body.description,
            }
        },
        {
            new:true
        }
    );
        if(updatedproduct){
            res.status(200).send({
             success:true,
             message:'updated single product',
             data:updatedproduct
            });
        }
        else{
            res.status(404).send({
            success: false,
            message:'Product not found',
        });      
   }

    }catch(err){
        res.status(400).send({message:err.message});
    }
});
                    
app.listen(port,async()=>{

    console.log(`Server is running on port ${port}`);
    await connectDB()
});