const mongoose = require('mongoose');
const db = require('../db');
const jwt = require('jsonwebtoken');
// const passport = require('../lib/passport-control');
require("dotenv").config();

const passport = require('passport'),
    passportJWT = require("passport-jwt"),
    Strategy = require('passport-local').Strategy,
    JWTStrategy = passportJWT.Strategy,
    ExtractJWT = passportJWT.ExtractJwt;

const User = require('../db/User');

console.log("Inside passport control!!!")

passport.use(new Strategy((username, password, done) => {
    console.log("Inside finding the user");
    User.findOne({ username: username }, (err, user) => {

        // If any error
        if (err) { return done(err) }

        if (!user) {
            return done(null, false, {
                message: 'No user found.'
            })
        }

        user.login(password).then(() => {
            return done(null, user)
        }).catch((err) => {
            return done(err, false, {
                message: 'Password not matched.'
            })
        })
    })
}))

// JWT
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jwt_secret'
}, (jwt_payload, done) => {
    User.findById(jwt_payload.id).then(user => {console.log("Inside Jwt")
        return done(null, user)
    }).catch(err => {
        return done(err, false, {
            message: 'Token not matched.'
        })
    })
}))



module.exports = {
    signUpNewUser: (req, res) => {
        console.log(req);
        let { username, password } = req.body;

        db.User.create({
            username,
            password
        }).then(user => {
            console.log(user);
            //Token
            const token = jwt.sign({ id: user.id }, 'jwt_secret')
            res.json({ token: token })

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
            const token = jwt.sign({ id: req.user.id }, 'jwt_secret');
            console.log(token);
            res.json({ token: token });
        };
        console.log("After user login!");
    },
    logoutUser: (req, res) => {
        console.log("LOG OUT THE USER!!!!");
        req.logout();
        res.send("User should be logged out!")
        // localStorage.removeItem('token');
        
    },
    // Return user information
    userInfo: (req, res) => {
        console.log("Getting user info!")
        passport.authenticate('jwt', {
            session: false
        }), (req, res) => {
            console.log("Got user info");
            if (!req.user) {
                res.json({
                    username: 'nobody'
                })
            }

            res.json({
                username: req.user.username
            })
        }
    }
}