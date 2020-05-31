require('dotenv').config()

const db = require('./models');



db.Kiddo.find({}, (err, allKiddos) => {
  if (err) {
    console.log(err)
    return
  }
 
  for (let kid of allKiddos) {
    db.Task.find({
      kiddo: kid._id,
    }, (err, foundTasks) => {
      const isAnyTaskLeft = foundTasks.filter(task => task.status == false).length
      console.log(kid.name, isAnyTaskLeft > 0)

      // update database, increase total points by 1 when isANyTaskLeft not 0
      if (!isAnyTaskLeft) {
        db.Kiddo.findByIdAndUpdate(kid._id, { $inc: {totalPoints: 1 }}, (err, updatedKiddo) => {
          console.log(updatedKiddo)
        })
      }
    })
  }
})