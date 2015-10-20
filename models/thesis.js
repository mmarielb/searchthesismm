'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let thesisSchema = new Schema({
  title:    { type: String },
  date:     { type: Date},
  author:   { type: String},
  tutor:    { type: String},
  cotutor:  { type: String},
  dni:      { type: Number},
  urlPdf:   { type: String},
  urlImage: { type: String}
});

export default mongoose.model('Thesis', thesisSchema);
