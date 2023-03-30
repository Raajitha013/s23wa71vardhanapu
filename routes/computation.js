var express = require('express');
var router = express.Router();

var ran1 = Math.random() * 100;
var ran2 = Math.random() * 100;

var a = 0;
var b = 0;
var c = 0;

/* GET users listing. */
router.get('/', function (req, res, next) {
    a = Math.imul(ran1, ran2);
    b = Math.log(ran2);
    c = Math.log10(ran1);

    res.send(`imul applied to : ${ran1}, ${ran2} is ${a} <br> log applied to : ${ran2} is ${b} <br> log10 applied to : ${ran1} is ${c}`);

});

module.exports = router;