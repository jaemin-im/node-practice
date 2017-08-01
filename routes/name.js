var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    res.render('hello', {name: req.body.user_name});
    console.log('Name : ' + req.body.user_name);
});

module.exports = router;
