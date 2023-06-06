const express = require("express");
const router = express.Router();
const flash = require("connect-flash")

const Employ = require('../models/employmodel');



router.get("/", (req, res) => {
  res.render("employ", {
    email: req.flash('email'),
    eid: req.flash('eid'),
  });
});

router.post('/', async (req, res) => {
  const { name, eid, gender, date, designation, department, appointmentdate } = req.body;
  try {
    const existingEmploy = await Employ.findOne({ eid });
    if (existingEmploy) {
      req.flash("eid", "this EmployeeID already exist in the database. Try another");
      res.redirect("/api/v1/employ");
      return;
    }

    const employ = new Employ({  name, eid, gender, date, designation, department, appointmentdate });

    await employ.save();
    req.employ = employ;
    req.flash("email", "Congratulations!! you have successfully added employee");
    res.redirect("/api/v1/employlist");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the employee.' });
    res.redirect("/api/v1/employlist");
  }
});

module.exports = router;
