const ProductService = require("../services/product.service");

const ProductController = {
  getAll: async (req, res) => {
    try {
      const { page = 1, limit = 5, keyword } = req.query;
      const data = await ProductService.getAll({ page, limit, keyword });
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
      const product = await ProductService.getById(Number(id));

      if (!product) {
        return res.status(404).json({ message: "Sản phẩm không tồn tại" });
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
      const newProduct = await ProductService.create(data);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedProduct = await ProductService.update(id, data);
      return res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await ProductService.delete(id);
      return res.status(204).json({ message: "Product deleted" });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ error: error.message });
    }
  },
};

module.exports = ProductController;
