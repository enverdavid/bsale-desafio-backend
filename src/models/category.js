const { DataTypes } = require('sequelize');
const { dataBase } = require('../database/connection');

const Category = dataBase.define('category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
},
{
  freezeTableName:true,
  timestamps: false
});

module.exports = { Category };
