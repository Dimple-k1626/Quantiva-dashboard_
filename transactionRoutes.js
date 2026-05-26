const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

router.use(authMiddleware);
router.post('/add', validate(['amount','receiver']), transactionController.addTransaction);
router.get('/', transactionController.getTransactions);
router.post('/analyze', validate(['transaction_id']), transactionController.analyzeExisting);

module.exports = router;