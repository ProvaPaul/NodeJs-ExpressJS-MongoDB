require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{        
    res.send("Hello I'm in Home Page");
})
app.listen(port,()=>{    
    console.log(`server is running at ${port}`);
});

// we have to hide .env from github