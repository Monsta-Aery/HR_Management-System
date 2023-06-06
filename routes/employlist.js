const express = require("express");
const router = express.Router();
const flash = require("connect-flash");
const Employ = require('../models/employmodel');

// Check is user is authenticated


router.get("/", async (req, res) => {
  const selectedGender = req.query.gender; // Get the selected gender from query parameters

  let filter = {}; // Define an empty filter object

  if (selectedGender && selectedGender !== 'all') {
    filter.gender = selectedGender; // Add the gender filter if a specific gender is selected
  }

  const employs = await Employ.find(filter); // Apply the filter to the database query

  res.render("employlist", {
    employs: employs,
    email: req.flash("email"),
  });
});


module.exports = router
