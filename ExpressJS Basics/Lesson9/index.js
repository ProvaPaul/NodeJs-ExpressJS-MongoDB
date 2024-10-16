const express=require('express');
const app=express();
const port=3000;
// morgan
const morgan=require('morgan');
app.use(morgan('dev'));
// NB: morgan is a middleware that logs the request details to the console

app.get('/products',(req,res)=>{
    res.send('list of products');
}
);
app.post('/products',(req,res)=>{
    res.send('created a list of products');
}
);
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
}   
);