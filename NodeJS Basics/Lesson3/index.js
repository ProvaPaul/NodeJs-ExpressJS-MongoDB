// 1.os

// const os=require("os");
// console.log(os);
// console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

//2. path

const path=require("path");
// console.log(path)

// const extensionName=path.extname("index.html");
// console.log(extensionName);

// for adding views after the current url(output: C:\Users\User\OneDrive\Documents\Node_Express_MongoDB\NodeJS Basics\Lesson3\views)
// const joinName=path.join(__dirname+"/views");
// console.log(joinName);

// for delete the last path and adding views after the current url(output: C:\Users\User\OneDrive\Documents\Node_Express_MongoDB\NodeJS Basics\views )
const joinName=path.join(__dirname+"/../views");
console.log(joinName);