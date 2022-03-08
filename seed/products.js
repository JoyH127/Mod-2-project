const db = require("../db");
const Product = require("../models/product");
const User = require("../models/user");
const Category = require("../models/category");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const accessories = await Category.find({ name: "Accessories" });
  const clothing = await Category.find({ name: "Clothing" });
  const living = await Category.find({ name: "Living" });
  const craft = await Category.find({ name: "Craft Supplies" });

  const seller = await User.find({}).select({
    First_Name: 1,
    Last_Name: 1,
    nickname: 1,
    _id: 0,
  });
  const products = [
    {
      title: "14K Solid Yellow Gold Italian Rope Necklace",
      category: accessories[0].name,
      seller: seller[1].nickname,
      price: 70.79,
      rate: 4.7,
      img: "https://i.etsystatic.com/23288130/r/il/f661f2/2769046078/il_1588xN.2769046078_4ozz.jpg",
    },
    {
      title: "Custom Neon Sign",
      category: living[0].name,
      seller: seller[3].nickname,
      price: 47.65,
      rate: 1.7,
      img: "https://i.etsystatic.com/27519419/r/il/1b2443/3522827430/il_1588xN.3522827430_lo4f.jpg",
    },
    {
      title: "Vintage Caravan Sewing Machine Cover Pattern",
      category: craft[0].name,
      seller: seller[5].nickname,
      price: 72.4,
      rate: 4.8,
      img: "https://i.etsystatic.com/8449717/r/il/4f6111/595505712/il_1588xN.595505712_aqiz.jpg",
    },
    {
      title:
        "Summer Short Sleeves Dress Shirt Casual Loose Dress Tunics Cotton Robes Midi Dresses Customized Oversized Dress Plus Size Clothing Linen",
      category: clothing[0].name,
      seller: seller[7].nickname,
      price: 75.77,
      rate: 4.7,
      img: "Summer Short Sleeves Dress Shirt Casual Loose Dress Tunics Cotton Robes Midi Dresses Customized Oversized Dress Plus Size Clothing Linen ",
    },
  ];
  await Product.insertMany(products);
  console.log("Created products");
};

//excute it everything
const run = async () => {
  await main();
  db.close();
};

run();
