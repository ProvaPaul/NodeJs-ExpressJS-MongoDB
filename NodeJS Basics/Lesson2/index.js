const fs=require('fs');
// 1. To create a file
// fs.writeFile('demo1.txt',"this is a simple demo file by which I'm understanding the concept of creating a file",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

//2. for append a file
// fs.appendFile('demo1.txt',"   this is a simple demo file by which I'm understanding the concept of append a file",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// 3.for reading a file
// fs.readFile('demo1.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });


//4. to rename a file

// fs.rename('demo1.txt','newFile.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successful');
//     }
// });


//5.to delete a file
        // firstly i will create an extra file then I'll delete this(me)

// fs.writeFile('demo2.txt',"this is a simple demo file by which I'm understanding the concept of deleting a file",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// fs.unlink('demo2.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successful');
//     }
// });


// 6.to check if a file exist or not
// fs.exists('newFile.txt',(result)=>{
//     if(result){
//         console.log('found');
//     }else{
//         console.log('not found');
//     }
// });

// for creating synchronous function we have to use like fs.writeFileSync