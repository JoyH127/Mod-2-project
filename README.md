# e-commerce-joy-
## Instructions on Installing & Running Locally

I skipped the MongoDB Atlas Cluster setup. Please check out the link below. 

https://www.mongodb.com/developer/how-to/use-atlas-on-heroku/

After finishing setting up MongoDB, you can follow the instruction below.

**Step 1: log into the Heroku CLI**
```
heroku login
```
**Step 2: clone my app**
```
git clone https://github.com/JoyH127/Mod-2-project.git
cd e-commerce-joy-
```
**Step 3: Create the Heroku App **
```
heroku create appname
```
Step 4: Connect to your MongoDB Atlas Cluster

- Click the `Connect` button.
- Click `Connect your application.`
- Replace the password with your password from the MongoDB set.
- Go to Your Heroku App setting and add your key and value in Config Vars.
```
Key -> MONGODB_URI
value -> `mongodb+srv://**userID**:**Password**@onlineshopping.86vim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

```
**Step 5: Set a MONGODB_URI config var** 

```
heroku config:set MONGODB_URI="mongodb+srv://yourUsername:yourPassword@yourClusterName.n9z04.mongodb.net/sample_mflix?retryWrites=true&w=majority"
```
**Step 6: Connecting Your App to MongoDB Atlas Cluster **

```
git commit -am "fix: refactor hard-coded connection string to Heroku config var."

git push heroku master

heroku ps:scale web=1
```
**Step 7: Populate seed file (Be careful of the sequence) and Open heroku app.**
```
heroku run node seed/categories.js
heroku run node seed/users.js
heroku run node seed/products.js
heroku run node seed/reviews.js
heroku open
```

## Endpoints, Parameters, Schema

### Endpoints
`/main`

`/user`

`/product`

`/review`
### Parameters
On your `/review` page, 
you can find product ID on each review, showing which products are reviewed.

For instance,
https://joyhpro.herokuapp.com/product/6228fc8259bfa8a248bd7b3f

### Schema
  There are 4 Schemas which include the category, product, review, user.

Category Schema
```JS
const Category = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);
```
User Schema
```JS
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
```
Product Schema
```JS
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
```

Review Schema
```JS
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
```

 Hosted On Heroku
 
 Link: https://joyhpro.herokuapp.com/
