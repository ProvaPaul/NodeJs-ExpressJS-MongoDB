const express=require('express');
const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
// for importing the routes from the route folder
const userRouter=require('./routes/users.route');
app.use(userRouter);
const productsRouter=require('./routes/products.route');
// here urlencoded is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(productsRouter);


app.get('/users',(req,res)=>{    
    res.send(htmlForm);
});
app.post('/users',(req,res)=>{    
        const name=req.body.name;
        const email=req.body.email;
        const user={
            name,
            email   
        }
        users.push(user);
        res.status(201).json({
            success:true,
            users,
        });
    });
app.use((req,res,next)=>{
    res.status(404).send('Sorry can not find that!');   
}   
);
app.listen(port,()=>{   
    console.log(`Server is running on port ${port}`);
});