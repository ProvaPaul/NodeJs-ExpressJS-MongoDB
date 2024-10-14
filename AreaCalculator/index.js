const express=require('express');
const app=express();
const port=3000;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendfile(__dirname+"/index.html");
})
app.get("/circle",(req,res)=>{
    res.sendfile(__dirname+"/circle.html");
})

app.get("/triangle",(req,res)=>{
    res.sendfile(__dirname+"/triangle.html");
})
app.get("/rectangle",(req,res)=>{       
    res.sendfile(__dirname+"/rectangle.html");
})

app.post("/circle",(req,res)=>{
    let radius=req.body.radius;
    let area=3.14*radius*radius;
    res.send(`<h1>Area of circle is ${area}</h1>`);
})
app.post("/triangle",(req,res)=>{    
    let base=req.body.base;
    let height=req.body.height;
    let area=0.5*base*height;
    res.send(`<h1>Area of triangle is ${area}</h1>`);
})

app.post("/rectangle",(req,res)=>{           
    let length=req.body.length;
    let width=req.body.width;
    let area=length*width;
    res.send(`<h1>Area of rectangle is ${area}</h1>`);
})
app.listen(port,()=>{
    console.log(`server is running ar ${port}`);
});
