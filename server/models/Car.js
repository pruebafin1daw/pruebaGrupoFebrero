const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('car', CarSchema);