const express=require('express');
//const parseBody=require('body-parser');
const fs=require('fs');

const router=express.Router();

//router.use(parseBody.urlencoded({extended:false}));

router.get("/login",(req,res,next)=>{
    console.log("login page");
    res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)"
    action="/login" method="POST">
        <input id="username" type="text" name"username">
        <button type="submit">add</button>
    </form>`
    );
});

router.post('/login',(req,res)=>{
    console.log("successfully login");
    res.redirect('/message');
});



module.exports=router;