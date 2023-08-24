const express=require('express');
const parseBody=require('body-parser');

const app=express();

const loginRoutes=require('./Routes/login');
const mssgRoutes=require('./Routes/message');

app.use(parseBody.urlencoded({extended:false}));

app.use(loginRoutes);
app.use(mssgRoutes);


app.use("/index",(req,res,next)=>{
    res.send("<h1>Home Found <h1>");
});

app.listen(4000);
