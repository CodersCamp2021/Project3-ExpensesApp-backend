const mongoose = require('mongoose');

const CategoriesSchema = mongoose.Schema({
  userID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  limit: {
    type: Number
  },
  color: {
    type: String
  }
});

module.exports = mongoose.model('Categories', CategoriesSchema);
