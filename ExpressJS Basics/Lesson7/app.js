const express=require('express');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// api/users :get
const userRouter=require('./routes/users.route');
app.use('/api/users',userRouter);

// api/users/:id :get
// api/users :post
// api/users/:id :patch
// api/users/:id :delete


app.get('/',(req,res)=>{
    res.sendfile(__dirname+"/./views/index.html");
});
// error handling 
app.use((req,res,next)=>{
    res.status(404).send("Sorry can't find that!");
});
// server error handling
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke!");   
});
module.exports=app; // Exporting the app object