const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const checkinsRouter = require('./checkins.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/checkins', checkinsRouter);

module.exports = router;
