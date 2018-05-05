var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/plant_fe", {useMongoClient: true});

mongoose.Promise = global.Promise;

module.exports.Message = require("./message");
