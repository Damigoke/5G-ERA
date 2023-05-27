const Mongoose = require('mongoose');

 const schema = Mongoose.Schema;


const referralSchema = new schema({
  referredUser: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});



 const userSchema = new schema({
    number: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    referredUsers: [ referralSchema ]
});

const userModel = Mongoose.model("User", userSchema);

module.exports = userModel;