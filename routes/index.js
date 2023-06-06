const express = require("express");
const router = express.Router();
const login = require("connect-flash")

router.get("/",(req, res)=>{
  res.render("index", {
    login: req.flash("login")
  })
})

 module.exports = router
