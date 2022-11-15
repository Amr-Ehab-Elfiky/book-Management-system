// import sequelize & schemas
const {  DataTypes } = require('sequelize');
const db = require("../DB/database")
// // create models
const role=require("./role.model")()
const user=require("./user.model")()
// define relationships
// user & role (one -> many)
role.hasMany(user);
user.belongsTo(role);

 // generate tables in DB
db.sync({force:false}).then(_=>console.log("Tabels created")).catch((e)=>console.log(e))

