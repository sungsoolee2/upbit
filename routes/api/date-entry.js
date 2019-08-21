
const db = require("../models");

module.exports = function(app) {

  app.get("/date_entries", function(req, res) {
    var query = {};
    if (req.query.crypto_id) {
      query.CryptoId = req.query.crypto_id;
    }

    db.DateEntry.findAll({
      where: query,
      include: [db.Crypto]
    }).then(function(dbDateEntry) {
      res.json(dbDateEntry);
    });
  });

  app.get("/api/date_entries/:id", function(req, res) {

    db.DateEntry.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Crypto]
    }).then(function(dbDateEntry) {
      res.json(dbDateEntry);
    });
  });

  app.post("/api/date_entries", function(req, res) {
    db.DateEntry.create(req.body).then(function(dbDateEntry) {
      res.json(dbDateEntry);
    });
  });

  app.delete("/api/date_entries/:id", function(req, res) {
    db.DateEntry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbDateEntry) {
      res.json(dbDateEntry);
    });
  });

  app.put("/api/date_entries", function(req, res) {
    db.DateEntry.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbDateEntry) {
      res.json(dbDateEntry);
    });
  });
};
