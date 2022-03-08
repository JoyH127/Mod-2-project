const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product");
const User = require("./user");

const review_product = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "products" },
  _title: { type: Schema.Types.String, ref: "products" },
});

const review_nickname = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "users" },
  name: { type: Schema.Types.String, ref: "users" },
});

const Review = new Schema(
  {
    title: { type: String, required: true },
    created_date: { type: String, required: true },
    product: [review_product],
    nickname: [review_nickname],
    rate: { type: Number, required: true },
    review_content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("reviews", Review);
