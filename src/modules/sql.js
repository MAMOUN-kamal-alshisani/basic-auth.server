
//// Sequelize is an `easy-to-use and promise-based Node.js ORM tool for Postgres...`
const {Sequelize,DataTypes} = require('sequelize')

const sql = new Sequelize('postgres://postgres:0000@localhost:5432/basicauth')

const USERS =sql.define('User',{
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

USERS.beforeCreate(User=>{

    console.log(User);
})

module.exports = {sql,USERS}