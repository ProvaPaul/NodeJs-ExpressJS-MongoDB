const express=require('express');
const app=express();
const port=3001;

app.get("/",(req,res)=>{
    // const id=req.query.id;
    // const name=req.query.name;
    const {id,name}=req.query;
    res.send(`<h1>student id is: ${id}, name: ${name}</h1>`)
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})
// using query parameter(?)
// http://127.0.0.1:3001/?id=37&name=prova