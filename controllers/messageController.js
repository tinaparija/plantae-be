var models = require('../models');
var Message = models.Message; 
const nodemailer = require('nodemailer'); 

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'plantae.sf@gmail.com',
      pass: 'Plant4eva'
    }
});


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

    let mailOptions = {
      from: 'plantae.sf@gmail.com', 
      to: 'plantae.sf@gmail.com', 
      subject: "A customer wants to get in touch!",
      text: `${message}`
    }
    transporter.sendMail(mailOptions)
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
