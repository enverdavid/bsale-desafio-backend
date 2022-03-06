const { dataBase } = require('../database/connection');
const { Product } = require('../models/product');
const { Op } = require('sequelize');

const getAllProducts = async (req, res) => {
  
  const whereOptions = {};

  if (req.query.search) {
    whereOptions.name = {
      [Op.like]: `%${req.query.search}%`
    }
  }

  if (req.query.category) {
    whereOptions.category = req.query.category
  }

  const allProducts = await Product.findAndCountAll({
    where: whereOptions
  });
  res.json(allProducts);
};

const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const producto = await Product.findByPk(id);
  res.json({ data: producto });
};

module.exports = {
  getAllProducts,
  getOneProduct,
};
