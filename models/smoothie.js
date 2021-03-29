const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    // rating: {type: Number, min: 1, max: 5, default: 5},
    userId:[{type: Schema.Types.ObjectId, ref: 'User'}]
  }, 
  {
    timestamps: true
  });


const smoothieSchema = new Schema({
name: String,
author:String,
recipe:String,
type:{ type: String, default: "green" },
reviews:[reviewSchema],
items:[{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
userId:[{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
timestamps: true
});

module.exports = mongoose.model('Smoothie', smoothieSchema);