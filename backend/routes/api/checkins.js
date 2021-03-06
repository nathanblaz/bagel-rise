const express = require("express");
// Doing database stuff, so need some kind of async handler
const asyncHandler = require("express-async-handler"); 
const router = express.Router();

// Put the database stuff needed here
// Import any other needed middleware here
const { Checkin } = require("../../db/models");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

// Create the API routes here
// GET all route
// TODO limit search results to a specified amount
router.get(
  "",
  asyncHandler(async (req, res) => {
    const checkins = await Checkin.findAll({ include: { all: true, nested: true }});
    res.json(checkins);
  })
);

// POST route
router.post(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { listId, review, rating, image } = req.body.checkin;
    const userId = req.user.id;
    const id = req.params.id;

    const checkin = await Checkin.create({ userId, listId, review, rating, image });
    return res.json(checkin);
  })
);

// Delete route


// Export the router
module.exports = router;
