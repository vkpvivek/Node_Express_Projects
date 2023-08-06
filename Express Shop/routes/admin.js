const express=require('express');

const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    console.log("i am in add-product middleware");
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="describe"><button type="submit">Add Product</button></form>');
});

router.post("/product",(req,res,next)=>{
    console.log(req.body);
    console.log("in product-page");
    res.redirect('/shop/');
});

//export the adminRoutes
module.exports=router;