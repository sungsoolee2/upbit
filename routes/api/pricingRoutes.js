const router = require("express").Router();
const pricingController = require("../../controllers/pricingController");

// Matches with "/api/'
router.route("/historical").get(pricingController.getHistorical);

router.route("/").get(pricingController.getDummyData);

router.route("/allcoindata").get(pricingController.getAllCoinData);
// console.log("In pricing routes!");
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;