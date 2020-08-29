const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    id: { type: String, required: true },
    booked: { type: Boolean, required: true },
    bill: { type: Number, required: true }
});

module.exports = mongoose.model("Table", tableSchema);