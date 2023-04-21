const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Favorite", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, 
        },
        name:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //   isUrl: true
            // }
        },
        status:{
            type: DataTypes.STRING, 
        },
        species:{
            type: DataTypes.STRING, 
        },
        origin:{
            type: DataTypes.STRING, 
        },
        gender:{
            type: DataTypes.STRING, 
            // validate: {
            //    isIn: [['Male','Female','unknown','Genderless']]
            // }
        },
        location:{
            type: DataTypes.STRING, 
        }
    }, { timestamps: false })
}