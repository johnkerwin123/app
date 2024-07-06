const express = require('express');
const authRoutes = require('./auth');
const ipRoutes = require('./ip');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/ip', ipRoutes);

module.exports = router;
