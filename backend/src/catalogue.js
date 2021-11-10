const router = require("express").Router();
const { get } = require("./axios");

//Get all categories
router.get("/categories", (request, response) => {
  get("/catalogue/categories", (e, d) => {
    if (e) d = {};
    response.json(d);
    response.end();
  });
});

//Get all products of a categorie
router.get("/categories/:id/products", (request, response) => {
  get(`/catalogue/categories/${request.params.id}/products`, (e, d) => {
    if (e) d = {};
    response.json(d);
    response.end();
  });
});

//Get product after id
router.get("/products/:id", (request, response) => {
  get(`/catalogue/products/${request.params.id}`, (e, product) => {
    if (e) product = {};
    const isCustom = product.customizable;
    if (e || !isCustom) {
      //If item is not customizable return just the product
      response.json(product);
      response.end();
    } else {
      //If item is customizable get selectables and sort the after their categories
      get(
        `/catalogue/products/${request.params.id}/selectables`,
        (e, selectables) => {
          product.exteriors = [];
          product.interiors = [];
          product.materials = [];
          product.accessories = [];
          selectables.forEach((selectable) => {
            switch (selectable.selectableCategory) {
              case "exterior":
                product.exteriors.push(selectable);
                break;
              case "interior":
                product.interiors.push(selectable);
                break;
              case "material":
                product.materials.push(selectable);
                break;
              case "accessories":
                product.accessories.push(selectable);
                break;
              default:
                break;
            }
          });
          response.json(product);
          response.end();
        }
      );
    }
  });
});

module.exports = router;
