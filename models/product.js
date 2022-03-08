const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = require("./category");
const Product = new Schema(
  {
    title: { type: String, required: true },
    category: [Category.name],
    seller: { type: String },
    price: { type: Number, required: true },
    rate: { type: Number, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", Product);
