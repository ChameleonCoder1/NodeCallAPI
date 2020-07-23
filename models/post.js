var mongoose              = require("mongoose");

var postSchema = new mongoose.Schema({
  searchterm: String,
  bingresults: String,
  googleresults: String,
  notes: {type: String, default: "No Notes Saved"},
  created: {type: Date, default: Date.now}

});

module.exports = mongoose.model("Post", postSchema);
