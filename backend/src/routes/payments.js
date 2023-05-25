const express = require('express')
const createPayment = require('../controller/paymentController')
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/payment', auth, createPayment);

module.exports = router;