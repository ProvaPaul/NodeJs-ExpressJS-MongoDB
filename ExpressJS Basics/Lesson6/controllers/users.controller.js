let users = require('../models/users.model');
const {v4:uuidv4}=require('uuid');
// get users
const getAllUsers=(req,res)=>{    
    res.status(200).json(users);
}
// create users 
const createUser=(req,res)=>{ 
    const newUser={
        id:uuidv4(),
        name: req.body.name,
        email: req.body.email,
    };
    users.push(newUser);
    res.status(200).json(users);
};

// update users 
const updateUser=(req,res)=>{ 
        const userid=req.params.id;
        const {name,email}=req.body;
        users.filter((user)=>user.id===userid).map((selecteduser)=>{
            selecteduser.name=name;
            selecteduser.email=email;
        });
        res.status(200).json({message:id});
};
// delete users 
const deleteUser=(req,res)=>{ 
    const userid=req.params.id;
    users=users.filter((user)=>user.id!==userid);
    res.status(200).json({message:userid});
};
module.exports={getAllUsers,createUser,updateUser,deleteUser};