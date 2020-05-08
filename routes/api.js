const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...
router.post("/todos", ctrl.todo.createTodo);


// ----
module.exports = router;