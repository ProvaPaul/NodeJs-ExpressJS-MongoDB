const express=require('express');
const app=express();
const port=3000;
// morgan
const morgan=require('morgan');
app.use(morgan('dev'));
// NB: morgan is a middleware that logs the request details to the console
// chalk
const chalk=require('chalk');
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

app.get('/products',(req,res)=>{
    res.send('list of products');
}
);
app.post('/products',(req,res)=>{
    res.send('created a list of products');
}
);
app.listen(port,()=>{
    console.log(chalk.bgRed.bold.underline.blue(`Server is running on port ${port}`));
}   
);