var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/post/:id', function(req, res) {
  db.comment.create({
    name: req.body.name,
    content: req.body.content,
    postId: req.params.id
  })
  .then(function(comment) {
    //console.log('yeah buddy');
    res.render('posts/show', { comment: comment });
    console.log(comment);
  })
})

module.exports = router;
