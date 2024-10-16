const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const userRouter=require('./routes/users.route');

app.use('/users',userRouter);
// home route
app.get('/',(req,res)=>{
    res.sendfile(__dirname+'/views/index.html');
});
// route not found
app.use((req,res,next)=>{
    res.status(404).send('Route does not exist');
});

// server error
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
}   
);

module.exports=app;

