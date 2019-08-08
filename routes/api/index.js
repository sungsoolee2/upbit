const router = require("express").Router();
const pricingRoutes = require("./pricingRoutes");

// Book routes
router.use("/pricing", pricingRoutes);

module.exports = router;
