const ProductModel = require("../../../schemas/Product.schema");
const WineModel = require("../../../schemas/Wine.schema");

const wineCreate = async (req, res) => {
  const { barcode } = req.body;
  let product = await ProductModel.findOne({ barcode });

  if (product)
    return res
      .status(400)
      .send({ message: "Producto existente con ese barcode" });

  product = await WineModel.create(req.body);

  return res.status(201).json(product);
};

module.exports = wineCreate;
