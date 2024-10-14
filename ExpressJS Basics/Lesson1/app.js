const express=require("express");
const app=express();

// route
// 1.get(browser theke req dile)
app.get("/",(req,res)=>{
    res.send("I am a get request at home route");
    res.end();
})
app.get("/about",(req,res)=>{
    res.send("I am a get request at about route");
    res.end();

})
// 2.post method(serever will receive and fetch and give result)->download postman software

app.post("/",(req,res)=>{
    res.send("I am a post request at home route");
    res.end();

})
// 3.put
app.put("/",(req,res)=>{
    res.send("I am a put request at home route");
    res.end();

})
// 3.patch
app.patch("/",(req,res)=>{
    res.send("I am a patch request at home route");
    res.end();

})
// 5.delete
app.delete("/",(req,res)=>{
    res.send("I am a delete request at home route");
})
module.exports=app;