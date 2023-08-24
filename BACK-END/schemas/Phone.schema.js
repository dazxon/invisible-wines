const mongoose = require("mongoose");

//
const phoneSchema = new mongoose.Schema(
  {
    type: { type: String },
    countryCode: String,
    areaCode: String,
    number: String,
    extension: String,
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

module.exports = phoneSchema;
