const router = require("express").Router();
const pricingRoutes = require("./pricingRoutes");
const historicalRoutes = require("./historicalRoutes");
// const passportRoutes = require('./passport');
const newsRoutes = require('./newsRoutes');
const signupRoutes = require('./signupRoutes.js');
const userRoutes = require('./userRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const userController = require('../../controllers/userController');
const crypto = require('./crypto-currency-route');

//we are already at /api
//now at /api/pricing
router.use("/pricing", pricingRoutes);
router.use("/historical", historicalRoutes);
router.use("/crypto", crypto);



// now at /api/signup do this ///////////////////////////////
router.use('/signup', signupRoutes);
//
router.use('/login', userController.loginUser);
router.use('/logout', userController.logoutUser);

router.use('/user', userRoutes);
// ///////////////////////////////////////////////////////////
router.use('/news', newsRoutes);
module.exports = router;
