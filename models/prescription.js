const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const prescriptionSchema = new Schema({
  prescriptionName: {
    type: String,
    trim: true,
    required: 'Prescription name is required.',
  },
  amount: {
    type: String,
    trim: true,
    required: 'Amount is required, please specify strength and dosing infomration',
  },
  dateprescribed: {
    type: String,
    trim: true,
  },
  doctorprescribed: {
    type: String,
    trim: true,
    required: 'Doctor prescribed is required',
  },
  generalinstructions: {
    type: String,
    trim: true,
  },
  author:{
    type: Schema.Types.ObjectId,
    ref:'User'
  }
});


module.exports = mongoose.model('Prescription', prescriptionSchema);

