const router = require("express").Router();
const pricingController = require("../../controllers/pricingController");
const historicalController = require("../../controllers/historicalController")
// Matches with "/api/'
router.route("/historical").get(pricingController.getHistorical);

router.route("/").get(pricingController.getDummyData);

//this call the function getAllCoinData in the pricingController
router.route("/allcoindata").get(pricingController.getAllCoinData);


router.route("/senseBTC").get(pricingController.omenicsDataBTC);

module.exports = router;