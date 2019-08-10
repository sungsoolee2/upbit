const mongoose =  require('mongoose');
const db = require('../db');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require("dotenv").config();

module.exports = {
    signUpNewUser: (req, res) => {
        console.log(req);
        let {username, password} = req.body;
    
        db.User.create({
            username,
            password
        }).then(user => {
            console.log(user);
            //Token
		const token = jwt.sign({id: user.id}, 'jwt_secret')
		res.json({token: token})
		
		console.log(token)
		
        }).catch(err => {
            console.log(`insert didn't work properly`);
        })
    },
    loginUser: (req, res) => {
        //this is where the login logic goes
        console.log(`loginin user method hit`);
        console.log(req.body);
        //console.log(passport);
        passport.authenticate('local', {
            session: false
        }), (req, res) => {
            console.log(`passport auth passed`);
        
            // Token
            const token = jwt.sign({id: req.user.id}, 'jwt_secret');
            console.log(token);
            res.json({token: token});
        };
        console.log("After user login!");
    },
    logoutUser: (req, res) => {
        console.log("LOG OUT THE USER!!!!");
        req.logout();
        res.send("User should be logged out!")
        // localStorage.removeItem('token');
        // console.log("logged out");
    }
}