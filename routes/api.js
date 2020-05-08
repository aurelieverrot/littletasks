const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...

// Todos Routes
router.get("/todos", ctrl.todo.indexTodo);
router.post("/todos", ctrl.todo.createTodo);


// ----
module.exports = router;