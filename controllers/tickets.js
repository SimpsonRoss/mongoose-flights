const Flight = require('../models/flight');
const Ticket = require('../models/ticket');



function newTicket(req, res) {
  const flight = Flight.findById(req.params.id);

  res.render('tickets/new', { title: 'Add Flight', flight});
};

module.exports = {
  new: newTicket,
};