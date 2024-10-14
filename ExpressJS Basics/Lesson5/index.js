const express=require('express');
const app=express();
const port=3000;

const myMiddleWare=(req,res,next)=>{
    console.log('I am a middleware');
    req.currentTime=new Date(Date.now());
    next();
};
app.use(myMiddleWare);
app.get("/",myMiddleWare,(req,res)=>{ 
    console.log('I am a route handler'+req.currentTime);                                      
    res.send('Hello World');
});

app.get("/about",myMiddleWare,(req,res)=>{ 
    console.log('I am about route handler'+req.currentTime);                                      
    res.send('Hello World about page');
});

// error handling middleware(not found type middleware)
app.use((req,res,next)=>{
    res.status(404).send('Not Found');
});
// more error
app.use((err,req,res,next)=>{
    console.error(err.stack);   
    res.status(500).send('Something broke!');
}   
);

app.listen(port,()=>{    
    console.log(`Server is running at http://localhost:${port}`);
});