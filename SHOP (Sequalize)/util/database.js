const Sequelize=require('sequelize');

const sequelize=new Sequelize('shop_db_seq','root','zxcvbnm123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;
