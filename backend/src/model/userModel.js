const Mongoose = require('mongoose');

 const schema = Mongoose.Schema;

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
    }
});

const userModel = Mongoose.model("User", userSchema);

module.exports = userModel;