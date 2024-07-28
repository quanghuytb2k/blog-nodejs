const express = require('express')
// const hbs = require('express-handlebars')

const path = require('path')
const app = express()
const handlebars = require('express-handlebars')


app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));

app.set('view engine','.hbs')
app.set('views', path.join(__dirname, 'src/resources/views'));
console.log(path.join(__dirname, 'resources/views'))

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  console.log(1122, req.query.q)
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})
app.listen(3000)