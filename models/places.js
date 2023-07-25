const mongoose = require('mongoose') //when i run node seeders it says cant find ./models

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('Comment', commentSchema)

const Place = mongoose.model('Place', PlaceSchema)

module.exports = Place  