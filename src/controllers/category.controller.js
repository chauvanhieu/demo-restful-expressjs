const CategoryService = require("../services/category.service");

const CategoryController = {
  getAll: async (req, res) => {
    try {
      const { page = 1, limit = 5, keyword } = req.query;
      const data = await CategoryService.getAll({ page, limit, keyword });
      return res.status(200).json({
        page,
        limit,
        data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await CategoryService.getById(Number(id));

      if (!product) {
        return res.status(404).json({ message: "Danh mục không tồn tại" });
      }

      return res.status(200).json(product);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const data = req.body;
      const newCategory = await CategoryService.create(data);
      return res.status(201).json(newCategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedCategory = await CategoryService.update(id, data);
      return res.status(200).json(updatedCategory);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await CategoryService.delete(id);
      return res.status(204).json({ message: "Đã xóa category" });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: error.message });
    }
  },
};

module.exports = CategoryController;
