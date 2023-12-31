require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
    res.render('home')
})

app.use('/places', require('./controllers/places'))
//app.get('/places', (req, res)=>{
   // res.render('index')
//})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
   
//says PlaceSchema is not defined