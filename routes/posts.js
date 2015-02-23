var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Post = mongoose.model('Post')

/* GET home page. */
router.get('/', function(req, res, next) {

	Post.find({ title: 'Sell car at a very low price' }, function (err, posts) {
	  if (err) res.send(err);
	    res.send(posts);
	});
});

module.exports = router;
