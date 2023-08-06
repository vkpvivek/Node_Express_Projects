const express=require('express');

const app=express();

const loginRoutes=require('./Routes/login');

app.use(loginRoutes);

app.use("/index",(req,res,next)=>{
    res.send("<h1>Home Found <h1>");
});

app.listen(4000);
