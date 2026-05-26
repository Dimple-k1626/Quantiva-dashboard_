const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');
const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

router.use(authMiddleware);
router.post('/analyze-message', validate(['text']), aiController.analyzeMessage);
router.post('/check-link', validate(['url']), aiController.checkLink);
router.post('/analyze-transaction', validate(['transactionDetails']), aiController.analyzeTransaction);

module.exports = router;