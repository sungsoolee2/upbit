// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const path = require('path')
const express = require("express");
const socketio = require("socket.io");
const routes = require("./routes");
const mongoose = require("mongoose");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/passport', {useNewUrlParser: true, useCreateIndex: true});

// Starting our Express app
// =============================================================
// Middleware
const bodyParser = require('body-parser'),
			flash = require('connect-flash'),
			passportControl = require('./lib/passport-control')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())

// db.sequelize.sync().then(function(){
//   app.listen(PORT, function() {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//   });
//  });
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});