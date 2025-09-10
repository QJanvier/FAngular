const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb://localhost/FAngu')
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log('Error ${err}'));

app.use(express.json())

app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`))


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)