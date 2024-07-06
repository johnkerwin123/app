const express = require('express');
const { getIPGeo } = require('../controllers/ip');
const { authMiddleware } = require('../middlewares/auth');

const router = express.Router();

router.get('/geo/:ip', authMiddleware, getIPGeo);

module.exports = router;

