const express = require('express');
const { productsRouter } = require('./routers/products.router');
const { dataBase } = require('./database/connection');
const cors = require('cors');

const app = express();

app.use(cors());

const conectarDB = async () => {
  try {
    await dataBase.authenticate();
    console.log('Base de datos online');
  } catch (error) {
    throw new Error(error);
  }
};

conectarDB();

app.get('/api/v1', (req, res) => {
  res.send('hola mundo');
});

app.use('/api/v1/products', productsRouter);

module.exports = { app };
