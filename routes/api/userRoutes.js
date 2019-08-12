require("dotenv").config();

const router = require('express').Router()
const userController = require('../../controllers/userController');

router.route('/')
    .get(userController.userInfo);

module.exports = router