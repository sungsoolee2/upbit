const router = require("express").Router();
const pricingRoutes = require("./pricingRoutes");

router.use("/pricing", pricingRoutes);

module.exports = router;
