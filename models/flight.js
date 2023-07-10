const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  airport: { 
    type: String, 
    default: 'MIA',
    enum: [
      'ATL', 
      'PEK', 
      'LAX', 
      'HND', 
      'DXB', 
      'ORD', 
      'LHR', 
      'PVG', 
      'CDG', 
      'DFW', 
      'AMS', 
      'CAN', 
      'FRA', 
      'IST', 
      'DEN', 
      'SIN', 
      'ICN', 
      'DEL', 
      'JFK', 
      'SYD'
    ],
   },
  departs: { 
    type: Date, 
    default: () => { 
      const today = new Date();
      const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
      return nextYear;
    }
  },
  flightNo: { 
    type: Number, 
    min: 10, 
    max: 9999}
}, {
  timestamps: true
});



// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
