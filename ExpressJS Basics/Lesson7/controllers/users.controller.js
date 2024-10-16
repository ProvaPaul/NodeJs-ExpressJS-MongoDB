// get users
const getAllUsers=(req,res)=>{    
    res.status(200).json({message:"All users"});
}
// get one users
const getOneUsers=(req,res)=>{    
    res.status(200).json({message:"get one users"});
}
// create users 
const createUser=(req,res)=>{    
    res.status(200).json({message:"user is created"});
}

// update users 
const updateUsers=(req,res)=>{    
    res.status(200).json({message:"user is updated"});
}
// delete users 
const deleteUsers=(req,res)=>{    
    res.status(200).json({message:"user is deleted"});
}
module.exports={getAllUsers,getOneUsers,createUser,updateUsers,deleteUsers}; // Exporting the functions