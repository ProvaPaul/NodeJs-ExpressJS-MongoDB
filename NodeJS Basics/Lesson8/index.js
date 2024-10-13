// 1.npm init -y
// 2.npm i nodemon
// 3.add "start":"nodemon index.js" to the package.json
// 4.npm start

const http = require('http');
const fs=require('fs');
const port = process.env.PORT;

const myServer = http.createServer((req, res) => {

        if(req.url==='/'){
        fs.readFile("./views/index.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url==='/about'){
        fs.readFile("./views/about.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url==='/contact'){
        fs.readFile("./views/contact.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    else{
        fs.readFile("./views/error.html",(err,data)=>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
});


// by using function we can do the same work
myServer.listen(port, () => {
    console.log(`Server is running successfully`);
});