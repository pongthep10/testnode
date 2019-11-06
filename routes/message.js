var express = require('express');
var router = express.Router();

const messageController = require('../controller/message')

/* GET users listing. */
router.post('/', async (req, res, next) => {
    messageController(req, res, next)
});

module.exports = router;



// router.get('/', async (req, res, next) => {
//     const message = await Message.forge({
//           content: "test message",
//       }).save({ is_sent: true }, {method:'insert'})
  
//     console.log(message)
//     res.send(message.toJSON());
//   });
  
//   module.exports = router;