var express = require('express');
var router = express.Router();
const User = require('../model/user')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const user = await new User().fetch()
  console.log(user)
  res.send(user.toJSON());
});

module.exports = router;