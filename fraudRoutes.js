const express = require('express');
const router = express.Router();
const fraudController = require('../controllers/fraudController');
const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

router.use(authMiddleware);
router.get('/threat-summary', fraudController.getThreatSummary);
router.post('/report', validate(['scam_type']), fraudController.reportScam);

module.exports = router;