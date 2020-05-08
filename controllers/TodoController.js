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
  db.Todo.findOneAndUpdate(req.params._id, req.body, (err, updatedTodo) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot update todo"})

    res.json(updatedTodo)
  })
}

module.exports = {
  indexTodo,
  createTodo,
  updateTodo
}