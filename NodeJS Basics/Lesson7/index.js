// 1. npm init -y
// 2. create a server
// node update korle ctrl+c diye then abar notun kore shuru korte hobe.Kintu nodemon use korle protteekbar alada kore ctrl+c deya lagbena.Ekbar lekhle porerbar theke auto update hobe
// 3.npm install nodemon
// add "start":"nodemon index.js" to the package.json
//4. now write npm start into the command line

const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const fs=require('fs')
// const myServer = http.createServer((req, res) => {
//     // console.log(req.url)
//     // res.end("Welcome to the server!");
//     if(req.url==='/'){
//         fs.readFile("./views/index.html",(err,data)=>{
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     else if(req.url==='/about'){
//         fs.readFile("./views/about.html",(err,data)=>{
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     else if(req.url==='/contact'){
//         fs.readFile("./views/contact.html",(err,data)=>{
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
//     else{
//         fs.readFile("./views/error.html",(err,data)=>{
//             res.writeHead(200,{"Content-type":"text/html"});
//             res.write(data);
//             res.end();
//         });
//     }
// });


// by using function we can do the same work

const myServer = http.createServer((req, res) => {
    
    const handleReadFile=(statusCode,fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode,{"Content-type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    if(req.url==='/'){
        handleReadFile(200,"./views/index.html");
    }
    else if(req.url==='/about'){
        handleReadFile(200,"./views/about.html");
    }
    else if(req.url==='/contact'){
        handleReadFile(200,"./views/contact.html");
    }
    else{
        handleReadFile(404,"./views/error.html");
    }
});
myServer.listen(port, hostname, () => {
    console.log(`Server is running successfully at http://${hostname}:${port}`);
});




