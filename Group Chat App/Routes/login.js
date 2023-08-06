const express=require('express');
const parseBody=require('body-parser');

const router=express.Router();

router.use(parseBody.urlencoded({extended:false}));

router.get("/login",(req,res,next)=>{
    console.log("login page");
    res.send(`
    <form action='/login' method='POST'>   
        <input type='text' name='username'>
        <button type='submit'>Login</button>
    </form>`);
});

router.post("/login",(req,res,next)=>{
    console.log(req.body.username);
    localStorage.setItem('username',JSON.stringify(req.body.username));
    console.log("username saved");
    res.send("Usename");
});


module.exports=router;