const { Sequelize } = require('sequelize');

// Traer variables de entorno
const { 
  HOST_DATABASE, 
  DATABASE_NAME,
  USER_DATABASE,
  PASSWORD_DATABASE
 } = process.env;

// Definir mi objeto:
const configObj = {
  host: HOST_DATABASE,
  dialect: 'mysql',
};

const dataBase = new Sequelize(
  DATABASE_NAME,
  USER_DATABASE,
  PASSWORD_DATABASE,
  configObj
);

module.exports = { dataBase };
