const Product = require("../models/product");
const User = require("../models/user");
const Category = require("../models/category");
const Review = require("../models/review");

// User

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("Plant not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getUserByName = async (req, res) => {
  try {
    const { nickname } = req.params;
    const user = await User.find({ nickname });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true }, (err, user) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(err.message);
      } else {
        console.log(user);
        res.json(user);
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted.");
    }
    throw new Error("User not found.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// Category

const createCategory = async (req, res) => {
  try {
    const category = await new Category(req.body);
    await category.save();
    return res.status(201).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (category) {
      return res.status(200).json({ category });
    }
    return res.status(404).send("Plant not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const category = await Category.find({ name });
    if (category) {
      return res.status(200).json({ category });
    }
    return res.status(404).send("Category not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCategory = (req, res) => {
  try {
    const { id } = req.params;
    Category.findByIdAndUpdate(id, req.body, { new: true }, (err, category) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(err.message);
      } else {
        console.log(category);
        res.json(category);
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Category deleted.");
    }
    throw new Error("Category not found.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//Product

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body);
    await product.save();
    return res.status(201).json({
      product,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json({ product });
    }
    return res.status(404).send("Product not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true }, (err, product) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(err.message);
      } else {
        console.log(product);
        res.json(product);
        // db.reviews.find({"product._id":ObjectId("622681a9fd5febea780bf005")})
        // Review.findOneAndUpdate(
        //   { "product._id": `${id}` },
        //   { $set: { "product.$.title": `${product.title}` } }
        // );
        const query = { "product._id": `${id}` };
        Review.findOneAndUpdate(query, {
          $set: { "product.$.title": `${product.title}` },
        });
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted.");
    }
    throw new Error("Product not found.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

//Review

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({
      review,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id);
    if (review) {
      return res.status(200).json({ review });
    }
    return res.status(404).send("Review not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateReview = (req, res) => {
  try {
    const { id } = req.params;
    Review.findByIdAndUpdate(id, req.body, { new: true }, (err, review) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(err.message);
      } else {
        console.log(review);
        res.json(review);
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function deleteReview(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Product deleted.");
    }
    throw new Error("Product not found.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  //category
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryByName,

  //user
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByName,

  //product
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,

  //review
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
