/* Test User Auth Middlewares */

const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require('../../utils/auth.js');

// POST /api/test
router.post("/test", function (req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
router.get(
    "/set-token-cookie",
    asyncHandler(async (req, res) => {
        const user = await User.findOne({
            where: {
                username: "Demo-lition",
            },
        });
        setTokenCookie(res, user);
        return res.json({ user });
    })
);

// GET /api/restore-user
router.get("/restore-user", restoreUser, (req, res) => {
  return res.json(req.user);
});

// GET /api/require-auth
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

module.exports = router;
