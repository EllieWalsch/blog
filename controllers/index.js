const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');

// http://localhost:3000/ is a HTML route - loads webpage
router.use('/', homeRoutes);

// api route - CRUD
router.use('/api', apiRoutes);

module.exports = router;