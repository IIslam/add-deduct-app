const { Router } = require("express");
const { normalizeData } = require("../util");
const {
  ensureLoggedIn,
  ensureHasRole
} = require("../middlewares/authentication");

module.exports = db => {

  let router = new Router();

  // API: IMPORT DATA
  router.post("/submit_data",
    ensureLoggedIn,
    (req, res) => {
      let user = req.user;
      let data = req.body.what_to_submit;
      let collection = req.body.where_to_submit;

      // data received desc: array of arrays => we need to normalize it to array of objects
      // [[val], [val], [val]] => [{0:val}, {1:val}, {2:val}]
      // replace number keys with the actual keys
      let normalized = normalizeData(data[0], data.slice(1), user);

      db.collection(collection)
        .insertMany(normalized, function (err, result) {
          if (err) {
            console.error(err);
            throw err;
          } else {
            res
              .status(200)
              .send(`${result.insertedCount} record(s) successfully inserted into ${collection}.`)
              .end();
          }
        });
    });

  // API: EXPORT DATA
  router.get("/export_data/:collection",
    ensureLoggedIn,
    ensureHasRole(['admin', 'hr']),
    (req, res) => {
      let collection = req.params.collection;
      db.collection(collection)
        .find({}, { fields: { _id: 0 } })
        .toArray((err, resultArray) => {
          if (err) {
            console.error(err);
            throw err;
          }
          res
            .status(200)
            .json(resultArray)
            .end();
        })
    });

  return router;
};
