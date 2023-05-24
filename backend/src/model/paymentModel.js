const Mongoose = require('mongoose');

 const schema = Mongoose.Schema;

 const paymentSchema = new schema({
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

const paymentModel = Mongoose.model("Payment", paymentSchema);

module.exports = paymentModel;