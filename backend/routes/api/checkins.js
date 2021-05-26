const express = require("express");
// Doing database stuff, so need some kind of async handler
const asyncHandler = require("express-async-handler"); 
const router = express.Router();

// Put the database stuff needed here
// Import any other needed middleware here
const { Checkin } = require("../../db/models");

// Create the API route here
router.get(
  "",
  asyncHandler(async (req, res) => {
    const checkins = await Checkin.findAll({ include: { all: true, nested: true }});
    res.json(checkins);
  })
);

// Export the router
module.exports = router;
