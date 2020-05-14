const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...

// Tasks Routes
router.get("/tasks", ctrl.task.indexTask);
router.post("/tasks", ctrl.task.createTask);
router.put("/tasks/:id", ctrl.task.updateTask);
router.delete("/tasks/:id", ctrl.task.destroyTask);


// ----
module.exports = router;