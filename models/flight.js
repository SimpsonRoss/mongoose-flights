const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationsSchema = new Schema({
  airport: { 
    type: String, 
    default: 'JFK',
    enum: [
      'ATL', 
      'LAX', 
      'DXB', 
      'LHR', 
      'CDG', 
      'AMS', 
      'IST', 
      'JFK', 
    ]
   },
  arrival: Date
});


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: [
      'American Airlines', 
      'Delta Air Lines', 
      'Southwest Airlines', 
      'United Airlines', 
      'Ryanair', 
      'Lufthansa', 
      'Air China', 
      'Emirates'
    ]
  },
  airport: { 
    type: String, 
    default: 'JFK',
    enum: [
      'ATL', 
      'LAX', 
      'DXB', 
      'LHR', 
      'CDG', 
      'AMS', 
      'IST', 
      'JFK', 
    ]
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
    max: 9999},
  destinations: [destinationsSchema], 
}, {
  timestamps: true
});



// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);
