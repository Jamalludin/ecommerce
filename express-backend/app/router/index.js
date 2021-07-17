const express = require('express')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({name:'Jamalludin, S.Kom', Pekerjaan:'Backend Programmer'});
});

module.exports = router