const Flight = require('../models/flight');
const Ticket = require('../models/ticket');



async function newTicket(req, res) {
  const flight = await Flight.findById(req.params.id);

  res.render('tickets/new', { title: 'Add Flight', flight});
};

async function create(req, res) {
  const flight = await Flight.findById(req.params.id);

  console.log(`flightNo: ${flight.flightNo}`)
  console.log(req.body)
  // req.body.flightNo = '344';
  req.body.flight = flight._id;
  console.log(req.body)

  try {
    await Ticket.create(req.body);
    console.log('creating ticket')
    console.log(req.body)
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/flights/${flight._id}`)
}

module.exports = {
  new: newTicket,
  create,
};