const { Op } = require("sequelize");
const { Product } = require("../models/index");

const ProductService = {
  getAll: async ({ page, limit, keyword }) => {
    const offset = (page - 1) * limit;

    const options = {
      offset: Number(offset),
      limit: Number(limit),
    };

    if (keyword) {
      options.where = {
        name: {
          [Op.like]: `%${keyword}%`,
        },
      };
    }

    const products = await Product.findAndCountAll(options);

    return products;
  },

  getById: async (id) => {
    const product = await Product.findByPk(id);
    return product ? product : null;
  },

  create: async (data) => {
    const newProduct = await Product.create(data);
    return newProduct;
  },

  update: async (id, data) => {
    const product = await Product.findByPk(id);

    if (!product) {
      return null;
    }

    product.name = data.name;
    product.category_id = data.category_id;
    product.price = data.price;

    await product.save();
    return product;
  },

  delete: async (id) => {
    await Product.destroy({ where: { id } });
  },
};

module.exports = ProductService;
