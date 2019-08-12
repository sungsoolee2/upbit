
const router = require("express").Router();

const historicalController = require("../../controllers/historicalController");

router.route("/getHistData/:ticker").get(historicalController.getOmenicsDataTicker);

module.exports = router;