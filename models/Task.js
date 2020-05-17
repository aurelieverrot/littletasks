const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
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
  },
  kiddo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }
  
})

module.exports = mongoose.model('Task', TaskSchema);