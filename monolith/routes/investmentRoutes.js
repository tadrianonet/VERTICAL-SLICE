const express = require('express');
const investmentController = require('../controllers/investmentController');

const router = express.Router();

router.post('/investments', investmentController.createInvestment);

module.exports = router;
