const mongoose = require('mongoose');

const restSchema = mongoose.Schema({
    restId: { type: String, required: true },
    restName: { type: String, required: true },
    password: { type: String, required: true },
    tableCtr: { type: Number, required: true }
});

module.exports = mongoose.model("Restaurant", restSchema);
