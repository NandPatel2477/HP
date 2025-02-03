const express = require('express');
const { logInteraction } = require('../controllers/interactionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/log', authMiddleware, logInteraction);

module.exports = router;
