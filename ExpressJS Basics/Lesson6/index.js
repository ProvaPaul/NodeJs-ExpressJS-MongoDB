require('dotenv').config();
const app=require('./app');
const port=process.env.port||4000;

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});
// I couldn't deploy it because heroku is not free .It's showing payment method.