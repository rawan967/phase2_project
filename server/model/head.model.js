import sequelize from "../database/connection";
import { DataTypes } from "sequelize";

const Head = sequelize.define('Head', {
    id: {
        type: DataTypes.INTEGER, },
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