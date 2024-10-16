const {v4:uuidv4}=require('uuid');
const users=[
    {
        id:uuidv4(),
        name:'John',
        email:'john@gmail.com'
    },
    {
        id:uuidv4(),
        name:'Smith',
        email:'smith@gmail.com'
    }
];
module.exports=users;
// database related code will be written into the model file