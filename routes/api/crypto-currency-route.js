const router = require('express').Router();
const cryptoController = require('../../controllers/cryptoController');
const db = require('../../models');


module.exports = function(app) {
  app.get("/", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Crypto.findAll({
      include: [db.DateEntry]
    }).then(function(dbCrypto) {
      res.json(dbCrypto);
    });
  });

  app.get("/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Crypto.findOne({
      where: {
        id: req.params.id
      },
      include: [db.DateEntry]
    }).then(function(dbCrypto) {
      res.json(dbCrypto);
    });
  });

  app.get("/:name", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Crypto.findOne({
      where: {
        name: req.params.name
      },
      include: [db.DateEntry]
    }).then(function(dbCrypto) {
      res.json(dbCrypto);
    });
  });

  app.post("/", function(req, res) {
    db.Author.create(req.body).then(function(dbCrypto) {
      res.json(dbCrypto);
    });
  });

  app.delete("/:id", function(req, res) {
    db.Crypto.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCrypto) {
      res.json(dbCrypto);
    });
  });

};
