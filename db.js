const mongoose = require("mongoose")

const mongourl = "mongodb://localhost:27017/mydatabase"

mongoose.connect(mongourl,
  {
    useNewUrlParser : true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection;


db.on('connected',() => {
  console.log("connection is established")
})

db.on('error',(err) => {
  console.error("connection error",err)
})

db.on('disconnected',() => {
  console.log("connection is terminated")
})


module.exports = db ;