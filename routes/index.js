var express = require('express');
var router = express.Router();

//messages for page load
const messages = [
  {
    text: "Hi there!",
    user: "Roboto",
    added: new Date()
  },
  {
    text: "Wow, is this a message board?",
    user: "Charlie Dingus",
    added: new Date()
  }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages : messages});  
});
//GET /new page
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Message Form'})
})
//POST for message submit
router.post('/new', function(req, res, next) {
  //add request body to message array
  messages.push({text: req.body.messageField , user: req.body.nameField, added: new Date()});
  //redirect to home
  res.redirect("/");
})

module.exports = router;
