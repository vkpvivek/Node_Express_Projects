const express=require('express');

const router=express.Router();

//middleware
router.get('/',(req,res,next)=>{
    res.send("<h1>Final page</h1>");
});


//export the shopRoutes
module.exports=router;