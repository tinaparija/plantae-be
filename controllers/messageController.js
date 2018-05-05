var models = require('../models');
var Message = models.Message; 

function index(req, res) {
  Message.find({}, function(err, messages) {
    if (err) res.send(err);
    else res.json(messages);
  });
}

function create(req, res) {
   Message.create(req.body, function(err, message) {
    if (err) { console.log('error', err); }
    res.json(message);
  });
}

function show(req, res) {
  Message.findById(req.params.message_id, function(err, message) {
    res.json(message);
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
};
