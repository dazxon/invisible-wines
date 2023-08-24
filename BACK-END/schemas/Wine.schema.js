const mongoose = require("mongoose");
const Product = require("./Product.schema");

const WineSchema = new mongoose.Schema({
  name: String,
  brand: String,
  type: { type: String },
  varietys: [String],
  country: String,
  region: String,
  vintage: String,
  description: String,
  food_pairing: String,
  tasting_notes: String,
  alcohol: Number,
});

const WineModel = Product.discriminator("Wine", WineSchema);

module.exports = WineModel;
