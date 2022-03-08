const db = require("../db");
const User = require("../models/user");
const Product = require("../models/product");
const Review = require("../models/review");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const necklace = await Product.find({
    title: "14K Solid Yellow Gold Italian Rope Necklace",
  }).select({ _id: 1, title: 1 });

  const neon = await Product.find({
    title: "Custom Neon Sign",
  }).select({ _id: 1, title: 1 });

  const caravan = await Product.find({
    title: "Vintage Caravan Sewing Machine Cover Pattern",
  }).select({ _id: 1, title: 1 });

  const dress = await Product.find({
    title:
      "Summer Short Sleeves Dress Shirt Casual Loose Dress Tunics Cotton Robes Midi Dresses Customized Oversized Dress Plus Size Clothing Linen",
  }).select({ _id: 1, title: 1 });

  const reviewer = await User.find({}).select({
    nickname: 1,
    _id: 1,
  });

  const reviews = [
    {
      title: "Love my necklace!!.",
      created_date: "03/03/2022",
      product: [
        {
          _id: necklace[0]._id,
          _title: necklace[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[2]._id,
          name: reviewer[2].nickname,
        },
      ],
      rate: 3,
      review_content:
        "Love my necklace!! It’s gorgeous and was packaged so nicely too. It arrived very quickly! ",
    },
    {
      title: "Love it! Beyond my expectations!",
      created_date: "12/10/2021",
      product: [
        {
          _id: necklace[0]._id,
          _title: necklace[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[0]._id,
          name: reviewer[0].nickname,
        },
      ],
      rate: 3,
      review_content:
        "Love it! Beyond my expectations! The length feels a bit extra for me, will be more careful with measurements next time. Thank you for a fast delivery and beautiful packaging! ",
    },
    {
      title: "This shipped quickly.",
      created_date: "01/26/2022",
      product: [
        {
          _id: necklace[0]._id,
          _title: necklace[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[8]._id,
          name: reviewer[8].nickname,
        },
      ],
      rate: 4,
      review_content:
        "This shipped quickly and arrived to the states faster than I expected. Love this necklace! Very dainty and pairs well with other jewelry, including necklaces. My short hair does tend to catch in the necklace at times but no hair pulled out. Very happy overal",
    },
    {
      title: "Our sign is perfect!",
      created_date: "01/27/2022",
      product: [
        {
          _id: neon[0]._id,
          _title: neon[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[4]._id,
          name: reviewer[4].nickname,
        },
      ],
      rate: 4,
      review_content:
        "The owner was so willing to work with my requests and allowed me to change fonts to see which one I liked best. It came today and I am blown away! It is so bright and very high quality. I love it!",
    },
    {
      title: "love love love my light ",
      created_date: "11/16/2021",
      product: [
        {
          _id: neon[0]._id,
          _title: neon[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[2]._id,
          name: reviewer[2].nickname,
        },
      ],
      rate: 2,
      review_content:
        "love love love my light it's everything and more than what I intended for it to be. the final finishing piece to my baby nursery",
    },
    {
      title: "For my tea shop",
      created_date: "12/10/2021",
      product: [
        {
          _id: neon[0]._id,
          _title: neon[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[1]._id,
          name: reviewer[1].nickname,
        },
      ],
      rate: 4,
      review_content:
        "LOVE my sign! I ordered it for my tea shop and it arrived just in time! It’s absolutely perfect! Excellent communication, shipping was great and instructions were simple enough. Will definitely be recommending this place to my friends!",
    },
    {
      title: "I’m not gonna lie, fairly novice sewer here..",
      created_date: "01/18/2022",
      product: [
        {
          _id: caravan[0]._id,
          _title: caravan[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[6]._id,
          name: reviewer[6].nickname,
        },
      ],
      rate: 2,
      review_content:
        "I’m not gonna lie, fairly novice sewer here, and I was lacking quite a few things for making this cute cover so I winged it. I also want to note I realized my pattern pieces were a 1/2” off due to printer settings, Oy, it was to late to turn back as I was halfway through. Again, I winged it! I ended up using Ok to wash it fabric glue instead of iron on fusing and I stiffened my project with Stiffy when it was done as I was short on batting. I had a great floral picked out and realized I didn’t have enough so went Americana themed instead. Thanks for the great pattern! It was challenging and fun ❤️ ",
    },
    {
      title: "I made this pattern years ago.",
      created_date: "02/25/2022",
      product: [
        {
          _id: caravan[0]._id,
          _title: caravan[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[15]._id,
          name: reviewer[15].nickname,
        },
      ],
      rate: 5,
      review_content:
        "I made this pattern years ago and if my sewing machine wasn't being covered by this awesome cover, one or both of my kitties were inside it!! As you can imagine, it was highly adorable! 😜 I used a wire hanger bent around the bottom to give it a perfectly rectangular shape. Clear instructions, well written. ",
    },
    {
      title:
        "This was one of five dresses I purchased because they were on a deep discount.",
      created_date: "02/22/2022",
      product: [
        {
          _id: dress[0]._id,
          _title: dress[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[13]._id,
          name: reviewer[13].nickname,
        },
      ],
      rate: 5,
      review_content:
        "This was one of five dresses I purchased because they were on a deep discount. WOW! More than worth it at full price! The colors are saturated and true to the listing palette. Seller contacted me for my specific measurements, and these dresses fit perfectly! So comfortable, POCKETS!, and a generous fabric cut. Quick shipping (considering they were custom made!) Will definitely be back again!  ",
    },
    {
      title: "I ordered this dress in forest green",
      created_date: "01/22/2022",
      product: [
        {
          _id: dress[0]._id,
          _title: dress[0].title,
        },
      ],
      nickname: [
        {
          _id: reviewer[11]._id,
          name: reviewer[11].nickname,
        },
      ],
      rate: 5,
      review_content:
        "I ordered this dress in forest green and LOVE it! it's loose fitting and flattering with the details at the waist.   ",
    },
  ];

  await Review.insertMany(reviews);
  console.log("Created reviews");
};

//excute it everything
const run = async () => {
  await main();
  db.close();
};

run();
