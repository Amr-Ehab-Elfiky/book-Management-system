const db = require("../DB/database")
const {DataTypes}=require("sequelize")
module.exports = () => {
   return  db.define('User', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z]+$", 'i'],
      
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true, 
            unique: true,
          }

      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z]+$", 'i'],
      
        }
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

    })
  }