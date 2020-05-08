const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...

// Todos Routes
router.get("/todos", ctrl.todo.indexTodo);
router.post("/todos", ctrl.todo.createTodo);
router.put("/todos/:id", ctrl.todo.updateTodo);
router.delete("/todos/:id", ctrl.todo.destroyTodo);


// ----
module.exports = router;