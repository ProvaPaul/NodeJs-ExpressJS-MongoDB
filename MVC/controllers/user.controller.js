// for importing the controllers from the controller folder
const users=require("../models/users.model");
const path=require('path');

exports.getUsers=(req,res)=>{    
    res.sendfile(path.join(__dirname+'/../views/index.html'));
};

exports.saveUsers=(req,res)=>{    
    const name=req.body.name;
    const email=req.body.email;
    const user={
        name,
        email   
    }
    users.push(user);
    res.status(201).json({
        success:true,
        users,
    });
};
// logic part will be wriiten into the controller file