const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');
const authMiddleware = require('../middleware/authMiddleware');
const validate = require('../middleware/validateMiddleware');

router.use(authMiddleware);
router.get('/', alertController.getAlerts);
router.post('/create', validate(['alert_type','severity','message']), alertController.createAlert);

module.exports = router;