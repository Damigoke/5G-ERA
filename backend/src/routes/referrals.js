const express = require('express')
const { createReferralLinks, createReferralClicks } = require('../controller/referralLinkController')
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/referral', auth, createReferralLinks);
//router.get('/refer', auth, createReferralClicks);

module.exports = router