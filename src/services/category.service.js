const { Sequelize } = require("sequelize");
const { Category } = require("../models/index");

const CategoryService = {
  getAll: async ({ page, limit, keyword }) => {
    const offset = (page - 1) * limit;

    const options = {
      offset: Number(offset),
      limit: Number(limit),
    };

    if (keyword) {
      options.where = {
        name: {
          [Sequelize.Op.like]: `%${keyword}%`,
        },
      };
    }

    const categories = await Category.findAndCountAll(options);

    return categories;
  },

  getById: async (id) => {
    const category = await Category.findByPk(id);
    return category ? category : null;
  },

  create: async (data) => {
    const newCategory = await Category.create(data);
    return newCategory;
  },

  update: async (id, data) => {
    const category = await Category.findByPk(id);
    if (!category) {
      return null;
    }

    category.name = data.name;
    category.category_id = data.category_id;
    category.price = data.price;

    await category.save();
    return category;
  },

  delete: async (id) => {
    await Category.destroy({ where: { id } });
  },
};

module.exports = CategoryService;
