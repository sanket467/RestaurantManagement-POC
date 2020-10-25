  const mongoose = require('mongoose');

  const foodSchema = mongoose.Schema({
      name: { type: String, required: true },
      cost: { type: Number, required: true },
      foodId: { type: String, required: true },
      restId: { type: String, required: true }
  });

  module.exports = mongoose.model('Food', foodSchema);
