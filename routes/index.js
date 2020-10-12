var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
  <html lang="en">
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>Welcome stranger !</h1>
    </body>
  </html>
  `)
});

router.get('/api/items', (req, res) => {
  res.json([
    {
      id: 1,
      description: "Ceci est une description"
    },
    {
      id: 2,
      description: "Ceci est une autre description"
    }
  ])
})

module.exports = router;
