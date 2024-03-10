var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', messages });
});

router.get('/new', (req,res)=>{
  res.render('form', {title: "Add a message"})
})

router.post('/new', (req,res)=>{
  const author = req.body.author;
  const message = req.body.message;

  messages.push({text: message, user: author, added: new Date()});
  res.redirect('/');
})

module.exports = router;
