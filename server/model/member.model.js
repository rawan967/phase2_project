import sequelize from "../database/connection";

const { DataTypes } = require('sequelize');

const Member = sequelize.define('Member', {
    id: {
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING,
    },
    password :{
        type: DataTypes.STRING,
    },
    committtee :{
        type: DataTypes.STRING,
    },
    score :{
        type: DataTypes.INTEGER,
    }
},{
    timestamps: false
}); 


module.exports = Member;