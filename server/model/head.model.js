const  sequelize = require( "../database/connection.js") ;
const { DataTypes } = require("sequelize");

const Head = sequelize.define('heads', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING, },
    password :{
        type: DataTypes.STRING, },
   committee :{
    type: DataTypes.STRING, },
   },{
    timestamps: false
});
module.exports = Head;