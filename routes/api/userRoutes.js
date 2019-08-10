require("dotenv").config();
console.log(require("dotenv").config())

const passport = require('passport')
const jwt = require('jsonwebtoken')
const db = require('../../db')
const router = require('express').Router()

router.get('/', passport.authenticate('jwt', {
	session: false
}), (req, res) => {
	if ( !req.user ) {
		res.json({
			username: 'nobody'
		})
	}

	res.json({
		username: req.user.username
	})
})

module.exports = router