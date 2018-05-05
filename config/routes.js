var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

//GET All MESSAGES  
router.get('/api/messages', controllers.messages.index);

//SINGLE MESSAGE ROUTES 
router.post('/api/messages', controllers.messages.create);
router.get('/api/messages/:message_id', controllers.messages.show);

module.exports = router;