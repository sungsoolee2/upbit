const router = require("express").Router();
const newsController = require("../../controllers/newsController");

console.log("Hit News Routes!");


router.route("/").get(newsController.getNews);

module.exports = router;