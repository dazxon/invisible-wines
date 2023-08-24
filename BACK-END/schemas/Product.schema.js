const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      default: "5",
    },
    barcode: String,
    price: Number,
    discount: Number,
    image: String,
    images: [String],
    available_quantity: Number,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
