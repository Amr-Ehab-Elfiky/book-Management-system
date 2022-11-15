// let { DB_PASSWORD, DB_USERNAME, DB_HOST, DB_NAME, DIALECT } = process.env;
const {Sequelize}=require("sequelize")
module.exports=new Sequelize(
  "bookstore","root","1234", {
        host: 'localhost',
        dialect: 'mysql' 
      },)

require("../models/index")


      
