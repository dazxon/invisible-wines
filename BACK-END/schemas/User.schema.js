const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const addressSchema = require("./Address.schema");
const emailSchema = require("./Email.schema");
const phoneSchema = require("./Phone.schema");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    lastName: String,
    phone: phoneSchema,
    isPhoneValidated: {
      type: Boolean,
      default: false,
    },
    phones: [phoneSchema],
    address: addressSchema,
    addresses: [addressSchema],
    email: { type: String, immutable: true },
    emails: [emailSchema],
    isEmailValidated: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    salt: String,
    code: String,
    role: {
      type: String,
      enum: ["admin", "client"],
      default: "client",
    },
    picture: { type: String },
    lastLoginAt: {
      type: Date,
      default: null,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const uppercaseRegex = /^(?=.*[A-Z])/;
  const lengthRegex = /^.{8,}$/;

  if (!uppercaseRegex.test(user.password)) {
    const error = new Error(
      "La contraseña debe contener al menos una letra mayúscula."
    );
    return next(error);
  }

  if (!lengthRegex.test(user.password)) {
    const error = new Error("La contraseña debe tener al menos 8 caracteres.");
    return next(error);
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
