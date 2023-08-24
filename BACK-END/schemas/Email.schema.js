// EMAIL SCHEMA
const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema(
  {
    email: String,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

emailSchema.virtual("userName").get(function () {
  return this.email ? this.email.split("@")[0] : "";
});

emailSchema.virtual("domain").get(function () {
  return this.email ? this.email.split("@")[1] : "";
});

//

module.exports = emailSchema;
