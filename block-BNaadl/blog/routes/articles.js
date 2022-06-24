var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET users listing. */
router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if(err) return next(err);
    res.render('articleList', { articles : articles });
  })
});


// Form for adding a new article
router.get('/new', (req, res) => {
  res.render('addArticle');
})

// route for creating a new article
router.post('/', (req, res, next) => {
  Article.create(req.body, (err, createdArticle) => {
    if(err) return next(err);
    res.redirect('/articles');
  })
})

// route for specific article details
router.get('/:id', (req, res) => {
  // capture id
  var id = req.params.id;
  // render the relevant article
  Article.findById(id, (err, article) => {
    if(err) return next(err);
    res.render('articleDetails', { article : article });
  })
})

module.exports = router;
