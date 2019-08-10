const router = require("express").Router();
const pricingController = require("../../controllers/pricingController");

// Matches with "/api/'
router.route("/pricing/historical")
    .get(pricingController.getHistorical)
    // .post(pricingController.addHistorical);

router.route("/pricing/all").get(pricingController.getDummyData);
// console.log("In pricing routes!");
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;