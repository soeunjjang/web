var express = require('express');
var router = express.Router();

/* Page :: user list */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Page :: login page 이동 */
router.get('/login', function(req, res, next){
  res.render('index', {title:'Login', pageName:'users/login.ejs'});
})

/* Page :: join page 이동 */
router.get('/join', function(req, res, next){
  res.render('index', {title:'Join', pageName:'users/join.ejs'});
})

//마이페이지
router.get('/mypage', function(req, res,){
  res.render('index', {title : '마이페이지', pageName:'users/mypage.ejs'});
})

module.exports = router;