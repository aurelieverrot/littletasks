const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...

// Tasks Routes
router.get("/tasks", ctrl.task.indexTask);
router.post("/tasks", ctrl.task.createTask);
router.put("/tasks/:id", ctrl.task.updateTask);
router.delete("/tasks/:id", ctrl.task.destroyTask);

// Kiddos Routes
router.get("/kiddos", ctrl.kiddo.indexKiddo);
router.post("/kiddos", ctrl.kiddo.createKiddo);
router.put("kiddos/:id", ctrl.kiddo.updateKiddo);
router.delete("/kiddos/:id", ctrl.kiddo.destroyKiddo);

// ----
module.exports = router;