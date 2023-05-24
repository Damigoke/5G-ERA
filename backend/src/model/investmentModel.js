const Mongoose = require('mongoose');

 const schema = Mongoose.Schema;

 const investmentSchema = new schema({
    userID: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    }, 
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const investmentModel = Mongoose.model("investment", investmentSchema);

module.exports = investmentModel;