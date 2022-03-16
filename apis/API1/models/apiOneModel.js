const mongoose = require('mongoose');
const slugify = require('slugify');
const apiOneScheme = new mongoose.Schema({
  recallNumber: {
    type: String,
    required: true
  },
   manufactureName: {
    type: String,
    required: true
  },
  makeName: {
    type: String,
    required: true

  },
  _modelName: {
    type: String,
    required: true

  },
  recallYear: {
    type: String,
    required: true
  },
  manufacturer_recall_no_txt: {
    type: String,
  },
  categoryEtxt: {
    type: String,
  }, 
  categoryFtxt: {
    type: String,
  },
  systemTypeEtxt: {
    type: String,
  }, 
  systemTypeFtxt: {
    type: String,
  },
  notificationTypeEtxt: {
    type: String,
  }, 
  notificationTypeFtxt: {
    type: String,
  },

}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});
const ApiOne = mongoose.model('ApiOne', apiOneScheme);
module.exports = ApiOne;