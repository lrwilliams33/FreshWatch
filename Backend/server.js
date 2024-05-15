require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const itemRoutes = require('./routes/items')
const userRoutes = require('./routes/user')
const iCalendarRoutes = require('./routes/iCalendar')
const emailRoutes = require('./routes/emails')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/items', itemRoutes)
app.use('/api/user', userRoutes)
app.use('/api/iCalendar', iCalendarRoutes)
app.use('/api/send-email', emailRoutes)

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)

      // initialize scheduled task
      require('./util/scheduler');
      console.log('initiallizing scheduled task')
    })
  })
  .catch((err) => {
    console.log(err)
  }) 