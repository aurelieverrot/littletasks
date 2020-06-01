require('dotenv').config()
const moment = require('moment')

const today = moment().startOf('day')
const {Task,Kiddo} = require('./models');



Kiddo.find({}, (err, allKiddos) => {
  if (err) {
    console.log(err)
    return
  }
 
  for (let kid of allKiddos) {
    Task.find({
      kiddo: kid._id,
      status: false,
      date: {
        "$gte": today.toDate(),
        "$lt": moment(today).endOf('day').toDate()
      }
    }, (err, foundTasks) => {
      // console.log("query for kid", kid._id, foundTasks.length)
      const noTaskLeft = foundTasks.length == 0
      // update database, increase total points by 1 when isANyTaskLeft not 0
      if (noTaskLeft) {
        console.log("Good job ", kid.name)
        Kiddo.findByIdAndUpdate(kid._id, { $inc: {totalPoints: 1 }}, (err, updatedKiddo) => {
          // console.log(updatedKiddo)
        })
      }
    })
  }
})