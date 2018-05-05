var db = require('./models');

var messagesList = [
    {
        email: "t@gmail.com",
        name: "Tina",
        ordered_plant: "Pothos", 
        quantity: 1232132, 
        message: "This is the best store in the world",
    },
    {
        email: "k@gmail.com",
        name: "Keith",
        ordered_plant: "Fiddle", 
        quantity: 1232132, 
        message: "gonna order hella plants here forever",
    },

]
db.Message.remove({}, function(err, messages){
  // code in here runs after all albums are removed
  db.Message.create(messagesList, function(err, messages){
    // code in here runs after all albums are created
    if (err) { return console.log('ERROR', err); }
    console.log("all messages:", messages);
    process.exit();
  });
});
