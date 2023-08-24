const crypto = require("crypto");
require("dotenv").config();
const { SECRET_TOKEN } = process.env;

/**
 * Encrypts a string using AES-256-CBC encryption.
 *
 * @param {string} text - The text to be encrypted.
 * @returns {string} The encrypted text in hexadecimal format.
 */
function encrypt(encrypt) {
  const cipher = crypto.createCipher("aes-256-cbc", SECRET_TOKEN);
  let encrypted = cipher.update(encrypt.toString(), "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

/**
 * Decrypts an encrypted string using AES-256-CBC decryption.
 *
 * @param {string} encryptedText - The encrypted text in hexadecimal format.
 * @returns {string} The decrypted text.
 */
function decrypt(decrypt) {
  const decipher = crypto.createDecipher("aes-256-cbc", SECRET_TOKEN);
  let decrypted = decipher.update(decrypt, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = { encrypt, decrypt };
