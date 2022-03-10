const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();
//replace your route in here.
router.get("/", (req, res) => res.send("this is the root!"));
const directory_route = "/Users/joyhwang/e-commerce-joy-/view";

// it is the different method and post it in the same route.
router.post("/main", controllers.createCategory);
router.get("/main", controllers.getAllCategories);
router.get("/main/:id", controllers.getCategoryById);
router.put("/main/:id", controllers.updateCategory);
router.delete("/main/:id", controllers.deleteCategory);
// router.get("/main/:name", controllers.getCategoryByName);

//User
router.post("/user", controllers.createUser);
router.get("/user", controllers.getAllUsers);
router.get("/user/:id", controllers.getUserById);
router.put("/user/:id", controllers.updateUser);
router.delete("/user/:id", controllers.deleteUser);
// router.get("/user/:nickname", controllers.getUserByName);

//Product
router.post("/product", controllers.createProduct);
router.get("/product", controllers.getAllProducts);
router.get("/product/:id", controllers.getProductById);
router.put("/product/:id", controllers.updateProduct);
router.delete("/product/:id", controllers.deleteProduct);

router.get("/home", (req, res) => {
  res.sendFile(directory_route + "/index.html");
});
router.get("/detail.html", (req, res) =>
  res.sendFile(directory_route + "/detail.html")
);

//Review
router.post("/review", controllers.createReview);
router.get("/review", controllers.getAllReviews);
router.get("/review/:id", controllers.getReviewById);
router.put("/review/:id", controllers.updateReview);
router.delete("/review/:id", controllers.deleteReview);

module.exports = router;
