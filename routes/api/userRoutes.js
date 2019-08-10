require("dotenv").config();

const passport = require('passport')
const jwt = require('jsonwebtoken')
const db = require('../../db')
const router = require('express').Router()
const userController = require('../../controllers/userController');

router.route('/')
    .get(userController.userInfo);

module.exports = router