var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number
})

mongoose.model('Post', PostSchema);