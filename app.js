const express = require("express");
const flash = require('connect-flash');
const session = require('express-session');
const methodOverride = require('method-override');
// const ejsLint = require('ejs-lint');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const index = require("./routes/index");
const login = require("./routes/login");
const employ = require("./routes/employ");
const employlist = require("./routes/employlist");
const crud = require("./routes/crud");
const User = require("./models/employmodel")




app.use(flash());


// Middleware for session
app.use(session({
    secret : 'Simple HR Management System',
    resave : true,
    saveUninitialized : true
}));



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets"));

mongoose.connect("mongodb://127.0.0.1:27017/allay", {
  useNewUrlParser: true,
});



app.use("/", index);
app.use("/api/v1/login", login);
app.use("/api/v1/employ", employ);
app.use("/api/v1/employlist", employlist);
app.use("/api/v1/crud", crud);

app.use(function(req, res, next){
  res.locals.success_msg = req.flash('success');
  next();
});





app.listen(3000, function () {
  console.log("server is running on port 3000");
});
