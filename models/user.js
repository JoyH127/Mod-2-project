const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
