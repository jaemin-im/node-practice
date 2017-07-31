var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('hello', { name: '임재민' });
});

module.exports = router;
