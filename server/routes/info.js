const { Router } = require("express");
const { formatDate } = require("../util/index");
const { ObjectID } = require("mongodb");

module.exports = (db) => {
  const collection = "codes";
  const router = new Router();
  router.get("/", (req, res) => {
    res.json({ environment: process.env.NODE_ENV });
  });

  router.post("/verifyCode", (req, res) => {
    db.collection(collection).findOne({ email: req.body.email }, function (
      err,
      record
    ) {
      if (err) throw err;
      if (record.code === req.body.toVerify) {
        return res.status(200).json({
          response: "Code Verified",
        });
      } else {
        return res.status(400).json({
          response: "Code not Verified",
        });
      }
    });
  });

  // setDeadline
  router.post("/setDeadline", async (req, res) => {
    const { endDate } = req.body;
    const createdAt = formatDate(Date.now());
    const deadline = formatDate(endDate);
    const expired = false;

    const { insertedCount } = await db
      .collection("deadlines")
      .insertOne({ createdAt, deadline, expired });

    return res.json({ status: 200, insertedCount }).end();
  });

  // getDeadline
  router.get("/getDeadline", async (req, res) => {
    const empty = (await db.collection("deadlines").countDocuments()) === 0;
    if (!empty) {
      const { expired, deadline, _id } = await db
        .collection("deadlines")
        .findOne({ expired: false });
      return res.json({ status: 200, expired, deadline, _id }).end();
    } else {
      return res.json({ status: 204, response: "Empty Collection" }).end();
    }
  });

  // deleteDeadline
  router.delete("/delDeadline/:id", async (req, res) => {
    const { id } = req.params;
    const { deletedCount } = await db
      .collection("deadlines")
      .deleteOne({ _id: ObjectID(id) });
    return res.json({ status: 200, deletedCount });
  });
  return router;
};
