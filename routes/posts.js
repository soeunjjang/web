var express = require('express');
var router = express.Router();

/* 게시글 페이지 */
router.get('/', function(req, res) {
  res.render('index', { title: '게시판', pageName :'posts/list.ejs' });
});

router.get('/insert', function(req, res) {
  res.render('index', { title: '글쓰기', pageName :'posts/insert.ejs' });
});

router.get('/read', function(req, res) {
  const id = req.query.id;
  res.render('index', { title: '게시글 정보', pageName :'posts/read.ejs', id});
});

module.exports = router;