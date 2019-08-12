require("dotenv").config();
console.log(require("dotenv").config())
const router = require('express').Router();
const userController = require('../../controllers/userController');


// Singup
//we are already at /api/signup
router.route('/')
    .post(userController.signUpNewUser);

// router.post('/', (req, res) => {
//     // res.send('ya lets go dooodd');
//     console.log(`post is hit`);

//     userController.signUpNewUser();
// 	// var user = new User({
// 	// 	username: req.body.username,
// 	// 	password: req.body.password
// 	// })

// 	// user.save().then(() => {

// 	// 	
// 	// }).catch((err) => {
// 	// 	res.status().json({})
// 	// })
// });

module.exports = router