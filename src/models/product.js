const { DataTypes } = require('sequelize');
const { dataBase } = require('../database/connection');

const Product = dataBase.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  url_image: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
  },
  discount: {
    type: DataTypes.INTEGER
  },
  category: {
    type: DataTypes.INTEGER
  }
},
{
  freezeTableName:true,
  timestamps: false
});

module.exports = { Product };
