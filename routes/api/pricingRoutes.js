const router = require("express").Router();
const paulsController = require("../../controllers/paulsController");

// Matches with "/api/'
router.route("/pricing/historical")
  .get(paulsController.getHistorical)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;