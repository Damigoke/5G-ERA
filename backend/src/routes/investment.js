const express = require('express')
const createInvestment = require('../controller/investmentController')
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/investment', auth, createInvestment);

module.exports = router;