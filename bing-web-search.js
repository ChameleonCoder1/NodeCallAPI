const https = require('https');
const express = require("express");

const app = express();
var port = 8000;

var bodyParser  = require("body-parser");
//var popup       = require("popups");
//popup.alert({content: 'Successly saved to db'});
var Post              = require("./models/post.js"),
    mongoose          = require("mongoose"),
    methodOverride    = require("method-override");

// function (err, db) {
//     if(err) throw err;
     //Write databse Insert/Update/Query code here..
//});

mongoose.connect("mongodb://localhost:27017/mdu_api", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride("_method"));


app.use(express.static("public"));

app.get('/', function(req, res){
    res.render("index.ejs");
})


//Index/Show Route
app.get('/data', function(req, res){
    //Get data from db
    Post.find({}, function(err,allposts){
      if(err){
        console.log(err)
    } else {
    res.render("data.ejs", {allposts:allposts});
  }
  });
});

//Create route
app.post("/data", function(req, res){
  var newPost={
    searchterm: req.body.search_term,
    bingresults: req.body.bingresults,
    googleresults: req.body.googleresults,
    notes: req.body.notes,
    created: req.body.created
  };
  Post.create(newPost, function(err, thispost){
    if(err){
      console.log(err);
    } else {
      res.redirect("/data");
    }
  });
});


//Destroy Route
app.delete("/data/:id", function(req,res){
  Post.findByIdAndRemove(req.params.id, function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect("/data");
    }
  });
});

app.listen(port, () => console.log('Your app is ready! Navigate to: http://localhost:' + port + '/.'));
