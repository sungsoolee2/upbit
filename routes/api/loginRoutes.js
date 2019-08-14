const router = require('express').Router();
const userController = require('../../controllers/userController');


//we are already at /api/login
router.route('/')
	.post(userController.loginUser)
	
// /api/login/login
//router.get('/', )

module.exports = router