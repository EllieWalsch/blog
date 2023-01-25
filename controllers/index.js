const router = require('express').Router();

const homeRoutes = require('./homeroutes');

// http://localhost:3000/ is a HTML route - loads webpage
router.use('/', homeRoutes);

module.exports = router;