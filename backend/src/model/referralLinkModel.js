const Mongoose = require('mongoose');


const referralLinkSchema = new Mongoose.Schema({
  user: { 
    type: Mongoose.Schema.Types.ObjectId, 
    ref: 'userModel', 
    required: true
     },
  link: { 
    type: String, 
    required: true, 
    unique: true 
    },
    clickCount: {
        type: Number,
        default: 0
      },
});

const ReferralLinkModel = Mongoose.model('ReferralLink', referralLinkSchema);

const referralClickSchema = new Mongoose.Schema({
  referrer: { 
    type: Mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
        },
  referredUser: { 
    type: Mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
    },
  timestamp: { 
    type: Date, 
    default: Date.now 
    },
});

const ReferralClickModel = Mongoose.model('ReferralClick', referralClickSchema);

module.exports = {ReferralLinkModel, ReferralClickModel}
