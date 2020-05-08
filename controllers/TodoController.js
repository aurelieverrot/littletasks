const db = require('../models');


const indexTodo = (req, res) => {
  db.Todo.find({}, (err, allTodos) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all todos"})

    res.json(allTodos)
  })
}

const createTodo = (req, res) => {
  db.Todo.create(req.body, (err, newTodo) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create new todo"})

    res.json(newTodo)
  })
};

const updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.id, req.body, (err, updatedTodo) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot update todo"})

    res.json(updatedTodo)
  })
}

const destroyTodo = (req, res) => {
  db.Todo.findByIdAndDelete(req.params.id, (err, deletedTodo) => {
    console.log(req.params)
    if (err) return res.status(404).json({ status: 404, error: "Cannot delete todo"})

    res.json(deletedTodo)
  })
}

module.exports = {
  indexTodo,
  createTodo,
  updateTodo,
  destroyTodo
}