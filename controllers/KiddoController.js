const db = require('../models');

const indexKiddo = (req, res) => {
  db.Kiddo.find({}, (err, allKiddos) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all kids"})

    res.json(allKiddos)
  })
}

const createKiddo = (req, res) => {
  db.Kiddo.create(req.body, (err, newKiddo) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create new kid"})

    res.json(newKiddo)
  })
};

const destroyKiddo = (req, res) => {
  db.Kiddo.findByIdAndDelete(req.params.id, (err, deletedKid) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot delete kid"})

    res.json(deletedKid)
  })
};

module.exports = {
  indexKiddo,
  createKiddo,
  destroyKiddo
}