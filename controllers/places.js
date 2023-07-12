const router  = require('express').Router()
// const db = require('../models')


//router.get('/', (req, res) => {
  //res.render('places/index')
//});

router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/restaurants1.jpg',
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurants2.jpg',
      }]
    res.render('places/index', {places})
      
})



module.exports = router
 