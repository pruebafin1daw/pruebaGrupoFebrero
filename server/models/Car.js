const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    mac: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('car', CarSchema);