
const router = require("express").Router();

const historicalController = require("../../controllers/historicalController");

router.route("/getHistData/:ticker").get(historicalController.getOmenicsDataTicker);


router.route("/parseDataTPV").post(historicalController.parseDataTPV);
module.exports = router;