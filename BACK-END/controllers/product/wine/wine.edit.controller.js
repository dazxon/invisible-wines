const WineModel = require("../../../schemas/Wine.schema");

const wineEdit = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedWine = await WineModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedWine) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(updatedWine);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error });
  }
};

module.exports = wineEdit;
