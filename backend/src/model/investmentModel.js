const Mongoose = require('mongoose');

 const schema = Mongoose.Schema;

 const investmentSchema = new schema({
    userID: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'userModel'
    },
    machineName:{
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    lifeCycle:{
        type: String,
        required: true
    },
    dailyIncome:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const investmentModel = Mongoose.model("investment", investmentSchema);

module.exports = investmentModel;