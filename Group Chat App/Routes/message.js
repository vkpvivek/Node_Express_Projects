const express=require('express');
const fs=require('fs');

const router=express.Router();

router.get("/message",(req,res,next)=>{

    fs.readFile("chatFile.txt",(err,data)=>{
        if(err){
            console.log(err);
            data="No chat exist";
        }
        res.send(
            `${data}<form onSubmit="document.getElementById('username').value= localStorage.getItem('username')"
            action="/chat" method="POST">
                <input id="mssg" type="text" name="mssg">
                <input type="hidden" name="username" id="username">
                <button type="submit">Send</button>
            </form>
        `);
    });
});


router.post("/chat",(req,res,next)=>{

    console.log(req.body.username);
    console.log(req.body.mssg);

    fs.writeFile("chatFile.txt", `${req.body.username} : ${req.body.mssg}, `,{flag:'a'},(err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/message');
        }
    });
});


module.exports=router;