const ProductModel = require("../../schemas/Product.schema");

const productDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductModel.findByIdAndUpdate(
      id,
      { deleted: true },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error });
  }
};

module.exports = productDelete;
