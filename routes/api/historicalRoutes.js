
const router = require("express").Router();

const historicalController = require("../../controllers/historicalController");

router.route("/getHistData/:ticker").get(historicalController.getOmenicsDataTicker);


router.route("/parseDataTPV").post(historicalController.parseDataTPV);

router.route("/getExactDateHist/:ticker/:fromDate/:toDate").get(historicalController.getOmenicsDateTicker);
router.route("/getExactDateHist/:ticker/:fromDate").get(historicalController.getOmenicsDateTicker);
module.exports = router;