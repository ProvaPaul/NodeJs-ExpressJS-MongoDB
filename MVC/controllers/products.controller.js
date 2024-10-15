// for importing the controllers from the controller folder
const products=require("../models/products.model");
const path=require('path');

exports.getProducts=(req,res)=>{    
    res.sendfile(path.join(__dirname+'/../views/product.html'));
};

exports.saveProducts=(req,res)=>{    
    const name=req.body.name;
    const price=req.body.price;
    const product={
        name,
        price  
    }
    products.push(product);
    res.status(201).json({
        success:true,
        products,
    });
};
// logic part will be wriiten into the controller file