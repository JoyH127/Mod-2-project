const db = require("../db");
const Category = require("../models/category");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const categories = [
    {
      name: "Accessories",
      url: "https://paypal.com",
    },
    {
      name: "Clothing",
      url: "http://blogs.com",
    },
    {
      name: "Living",
      url: "http://msn.com",
    },
    {
      name: "Craft Supplies",
      url: "http://4shared.com",
    },
  ];

  await Category.insertMany(categories);
  console.log("Created categories");
};

//excute it everything
const run = async () => {
  await main();
  db.close();
};

run();
