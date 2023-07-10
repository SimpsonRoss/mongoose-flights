const Flight = require('../models/flight');

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);
  
  flight.destinations.push(req.body)

  try {
    // Save any changes made to the flight document and it's sub documents
    await flight.save();
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/flights/${flight._id}`)
}


module.exports = {
  create,
};