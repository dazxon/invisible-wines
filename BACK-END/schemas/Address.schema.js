const mongoose = require("mongoose");

//
const addressSchema = new mongoose.Schema(
  {
    streetNumber: String,
    streetName: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
//

module.exports = addressSchema;
