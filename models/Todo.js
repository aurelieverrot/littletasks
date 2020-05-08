const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: {
    type: String,
    required: 'Enter description'
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', TodoSchema);