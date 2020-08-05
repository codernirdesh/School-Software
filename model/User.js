const mongoose = require("mongoose");
const Int32 = require('mongoose-int32');
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  yogyata: {
    type: String,
    min: 6,
    max: 255,
  },
  training: {
    type: String,
    min: 6,
    max: 1024,
  },
  Int32edDate: {
    type: String,
    min: 6,
    max: 255,
  },
  badhuwaMiti: {
    type: String,
    min: 6,
    max: 255,
  },
  position: {
    type: String,
    min: 6,
    max: 255,
  },
  type: {
    type: String,
    min: 6,
    max: 255,
  },
  level: {
    type: String,
    min: 6,
    max: 255,
  },
  salary: {
    type: Int32,
    min: 6,
    max: 255,
  },
  rate: {
    type: Int32,
    min: 6,
    max: 255,
  },
  rateNumber: {
    type: Int32,
    min: 6,
    max: 255,
  },
  grade: {
    type: Int32,
    min: 6,
    max: 255,
  },
  kaSamKosh: {
    type: Int32,
    min: 6,
    max: 255,
  },
  insurance: {
    type: Int32,
    min: 6,
    max: 255,
  },
  principalallowence: {
    type: Int32,
    min: 6,
    max: 255,
  },
  otherAllowence: {
    type: Int32,
    min: 6,
    max: 255,
  },
  festivalBonus: {
    type: Int32,
    min: 6,
    max: 255,
  },
  dressBonus: {
    type: Int32,
    min: 6,
    max: 255,
  },
  remarks: {
    type: String,
    min: 6,
    max: 255,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
