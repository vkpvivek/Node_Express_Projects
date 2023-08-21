const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'shop_db',
    password:'zxcvbnm123'
});

module.exports=pool.promise();