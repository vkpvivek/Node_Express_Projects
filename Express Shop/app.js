
const express =require('express');
const parseBody=require('body-parser');

const app=express();

//import from routes
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(parseBody.urlencoded({extended:false}));

//acess from routes
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>!!Page Not Found<h1>!!");
});

app.listen(4000);
