const mongoose = require('mongoose');

const complimentSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Add some words!"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Compliment', complimentSchema);