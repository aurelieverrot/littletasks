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
    }, (err, foundTasks) => {
      const isAnyTaskLeft = foundTasks.filter(task => task.status == false).length

      // update database, increase total points by 1 when isANyTaskLeft not 0
      if (!isAnyTaskLeft) {
        let query = {
          id: kid._id,
          date: {
            "$gte": today.toDate(),
            "$lt": moment(today).endOf('day').toDate()
          }
        }

        Kiddo.findByIdAndUpdate(query, { $inc: {totalPoints: 1 }}, (err, updatedKiddo) => {
          console.log(updatedKiddo)
        })
      }
    })
  }
})