const db = require('../models');
const moment = require('moment');

const today = moment().startOf('day');

const indexTask = (req, res) => {
  db.Task.find({ 
    status: false,
    date: {
      "$gte": today.toDate(),
      "$lt": moment(today).endOf('day').toDate()
    }
  }, (err, allTasks) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all tasks"})

    res.json(allTasks)
  })
}

const createTask = (req, res) => {
  db.Task.create(req.body, (err, newTask) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create new task"})

    res.json(newTask)
  })
};

const updateTask = (req, res) => {
  db.Task.findByIdAndUpdate(req.params.id, req.body, (err, updatedTask) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot update task"})

    res.json(updatedTask)
  })
}

const destroyTask = (req, res) => {
  db.Task.findByIdAndDelete(req.params.id, (err, deletedTask) => {
    console.log(req.params)
    if (err || !deletedTask) return res.status(404).json({ status: 404, error: "Cannot delete task"})

    res.json(deletedTask)
  })
}

module.exports = {
  indexTask,
  createTask,
  updateTask,
  destroyTask
}