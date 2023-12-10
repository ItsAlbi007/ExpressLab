// load express
const express = require('express')
const path = require('path')

// require the to do "database"
const gymTd = require('./data/gym-td')
const gymTd = require('./data/gym-td')
//create our express app
const app = express()

//configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//mount middleware (app.use)

//mount routes

//define a "root" route directly on app
//next lesson well use better practice routing
app.get('/', function(req, res) {
// path MUST start with a leading slash
  res.redirect('/gym')
})

app.get('/Home', function(req, res) {
  // never begin the name of the template
  // with a forward slash
  res.render('home')
})

app.get('/gym', function(req, res) {
  const gym = gymTd.getAll()
  res.render('gym/index', {gym})
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})