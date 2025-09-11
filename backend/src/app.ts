const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const routes = require('./routes')

mongoose.connect('mongodb://localhost/FAngu')
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log('Error ${err}'));

app.use(express.json())
app.use(cookieParser("mySecret"))

app.use(session(
  {
    secret: "mySecret",
    saveUnitialized: true,
    resave: false,
    cookie: { maxAge: 6000 * 60},
    store: MongoStore.create({ client: mongoose.connection.getClient() })
  }
))


app.use(passport.initialize())
app.use(passport.session())
app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`))


app.get('/', function (req, res) {
  req.session.visited = true
  res.cookie('Pedro', 'express', { maxAge: 6000, signed: true})
  res.status(201).send({msg: 'Hello World!'})
})
 
