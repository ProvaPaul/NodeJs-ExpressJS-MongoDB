const express=require('express');
const app=express();
const port=3001;
// using postman we can practice this easily

//1.using query parameter(?)
// http://127.0.0.1:3001/?id=37&name=prova

// app.get("/",(req,res)=>{
//     // const id=req.query.id;
//     // const name=req.query.name;
//     const {id,name}=req.query;
//     res.send(`<h1>student id is: ${id}, name: ${name}</h1>`)
// })


//2.using route parameter
// http://127.0.0.1:3001/userid/2/userage/tuki
// app.get("/userid/:id/userage/:name",(req,res)=>{
//     const id=req.params.id;
//     const name=req.params.name;
    
//     res.send(`<h1>student id is: ${id}, name: ${name}</h1>`)
// })

//3.using headers
// http://127.0.0.1:3001
// app.get("/",(req,res)=>{
//     const id=req.header('id');
//     const name=req.header('name');   
//     res.send(`<h1>student id is: ${id}, name: ${name}</h1>`)
// })

// 4.post req from json
// i. npm install body-parser
const bodyParser=require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// app.post("/user",(req,res)=>{
//     const name=req.body.name;
//     res.send(`welcome ${name}`);
// });

//*** */ 5.how to send and receive form data(create and write in index.html)
app.get("/register",(req,res)=>{
    res.sendfile(__dirname+'/index.html');
})
app.post("/register",(req,res)=>{
    const fullname=req.body.fullname;
    const age=req.body.age;
    res.send(`Name: ${fullname} , Age:${age}`);
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})
