const router = require('express').Router();
const cryptoController = require('../../controllers/cryptoController');
const db = require('../../models');


module.exports = function(app) {
  app.get("/", function(req, res) {

    db.Crypto.findAll({
      include: [db.DateEntry]
    }).then(function(dbCrypto) {
      res.json(dbCrypto);
    });
  });

  app.get("/:id", function(req, res) {

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
    db.Crypto.create(req.body).then(function(dbCrypto) {
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
