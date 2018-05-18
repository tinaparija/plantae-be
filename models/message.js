var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
    name: String, 
    email: String, 
    phone: String, 
    zipcode: Number, 
    monsteraQ: Number, 
    pothosQ: Number, 
    flfQ: Number, 
    snakeQ: Number, 
    comments: String 
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
