const  sequelize = require( "../database/connection.js") ;
const { DataTypes } = require('sequelize');

const Member = sequelize.define('Members', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    password :{
        type: DataTypes.STRING,
    },
    committee :{
        type: DataTypes.STRING,
    },
    score :{
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false
}); 


module.exports = Member;