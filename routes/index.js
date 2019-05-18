var express = require('express');
let mongoose = require('mongoose');
require('../model/connect')
require('../model/schema')
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res, next) {
  let products=  await mongoose.model('products').find();
  res.render('index', { products});
});
router.get('/login',function(req , res , next){
  res.render('login');
})
module.exports = router;
