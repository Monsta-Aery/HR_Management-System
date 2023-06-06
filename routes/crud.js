const express = require('express');
const router = express.Router();

const Employ = require('../models/employmodel');



// Check is user is authenticated
function isAuthenticatedUser(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error_msg", "Please Login first to access this page.");
    res.redirect("/login");
}


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const employ = await Employ.findById(id);
    if (!employ) {
      return res.status(404).json({ error: 'Employ not found.' });
    }

    res.status(200).json({ employ });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the employ.' });
  }
});


router.post('/:id', async (req, res) => {
  const employs = await Employ.find();
  const { id } = req.params;
  const { name, eid, gender, date, designation, department, appointmentdate } = req.body;

  try {
    const updatedEmploy = await Employ.findByIdAndUpdate(id, {
      name,
      eid,
      gender,
      date,
      designation,
      department,
      appointmentdate
    }, { new: true });

    if (!updatedEmploy) {
      return res.status(404).json({ error: 'Employee not found.' });
    }

    res.redirect(302, "/api/v1/employlist");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the employee.' });
  }
});


router.post("/:id/delete", async function (req, res) {
  try {
    await Employ.findByIdAndDelete(req.params.id);
    res.redirect("/api/v1/employlist")
  } catch (err) {
    console.log(err);
  }
});




module.exports = router
