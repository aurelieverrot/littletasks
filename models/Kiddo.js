const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KiddoSchema = {
  name: {
    type: String,
    required: "Enter kid's name"
  },
  totalPoints: {
    type: Number,
    default: 0
  }
}

module.exports = mongoose.model('Kiddo', KiddoSchema);