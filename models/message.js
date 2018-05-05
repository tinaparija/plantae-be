var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  email: String,
  name: String,
  ordered_plant: String, 
  quantity: Number, 
  message: String,
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
