const express=require("express");
const app=express();

// // route
// // 1.get(browser theke req dile)
// app.get("/",(req,res)=>{
//     res.send("I am a get request at home route");
//     res.end();
// })
// app.get("/about",(req,res)=>{
//     res.send("I am a get request at about route");
//     res.end();

// })
// // 2.post method(serever will receive and fetch and give result)->download postman software

// app.post("/",(req,res)=>{
//     res.send("I am a post request at home route");
//     res.end();

// })
// // 3.put
// app.put("/",(req,res)=>{
//     res.send("I am a put request at home route");
//     res.end();

// })
// // 3.patch
// app.patch("/",(req,res)=>{
//     res.send("I am a patch request at home route");
//     res.end();

// })
// // 5.delete
// app.delete("/",(req,res)=>{
//     res.send("I am a delete request at home route");
// })
const userRouter = require('./routes/users.route');

// Use the imported routes
app.use("/api/user", userRouter);

app.get("/register",(req,res)=>{
    //1.return json
    // res.status(200).json({
    //    message: "I am at register route!",
    // statusCode: 200, 
    // });

    // 2.return redirect
    // res.redirect("/login");

    // 3.return html file as response
    res.statusCode=200
    res.sendFile(__dirname+"/views/register.html")
})
app.get("/login",(req,res)=>{
    // using cookies
    // res.cookie("name","putu");
    // res.cookie("age","50");
    res.clearCookie("age");
    res.append("id","120000");
    res.end()
    // res.send("I am at login route");
})
app.get("/",(req,res)=>{
    res.statusCode=200
    res.sendFile(__dirname+"/views/index.html")
    // res.send("I am a get request at home route");
})
// Default route to handle undefined routes (404)
app.use((req, res) => {
    res.status(404).send("404 error found!");
});

// Export the app for use in other files
module.exports = app;