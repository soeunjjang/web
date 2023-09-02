var express = require('express');
var router = express.Router();

/* 도서관리페이지 home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: '도서관리', name:'홍길동' });
});

module.exports = router;
