const { dataBase } = require('../database/connection');
const { Product } = require('../models/product');

const getAllProducts = async (req, res) => {
  // const allProducts = await dataBase.query('SELECT * FROM product');s
  const allProducts = await Product.findAll();
  res.json({ data: allProducts });
};

const getOneProduct = (req, res) => {
  const { id } = req.params;
  res.json({ msg: `retorno producto con el id ${id}` });
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
