// axios
//   .get("http://localhost:3000/review")
//   .then(function (respond) {
//     const reviews = respond.data.reviews;
//     console.log(review);
//   })
//   .catch(function (error) {
//     console.error("error: ", error);
//   });
axios
  .get("http://localhost:3000/product")
  .then(function (result) {
    console.log("result occur:", result);
    const products = result.data.products;
    console.log(products[0]);
    let productsHtml = "";
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
      productsHtml +=
        '<div class="card1">' +
        `<a class="link" id = '${i}' href="detail.html">Go to product</a>` +
        "<img src=" +
        product.img +
        "/>" +
        '<div class="info">' +
        "<p>" +
        product.title +
        "</p>" +
        "</div>" +
        "</div>";
    }
    document.querySelector(".main").innerHTML = productsHtml;

    // Shapehtml(products);
  })
  .catch(function (error) {
    console.error("error: ", error);
  });

// const button = docuemnt.querySelectorAll(".link");
// for (let i = 0; i < button.length; i++) {
//   console.log(button);
//   button[i].addEventListener("click", () => {
//     document.querySelector(".main").innerHTML = "";
//     let detailHtml = "";
//     let item = products[i];
//     detailHtml +=
//       "<div class='details'>" +
//       '<div class="detail_img"></div>' +
//       '<div class="detail_info">' +
//       "<p>" +
//       item.seller +
//       "</p>" +
//       +"<p>" +
//       item.rate +
//       "</p>" +
//       +"<h2>" +
//       item.title +
//       "</h2>" +
//       +"<h4>" +
//       item.price +
//       "</h2>" +
//       '<div class="review">' +
//       "<h4>review</h4>" +
//       "</div>" +
//       " </div>" +
//       "</div>";
//   });
//   document.querySelector(".main").innerHTML = detailHtml;
// }
