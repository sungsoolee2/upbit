require("dotenv").config();
// console.log(require("dotenv").config())


const router = require('express').Router();
const userController = require('../../controllers/userController');


//we are already at /api/login
router.route('/')
	.post(userController.loginUser)
	.post(userController.logoutUser)
// /api/login/login
//router.get('/', )

module.exports = router