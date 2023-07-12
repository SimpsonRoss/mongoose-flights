const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    
    res.render('flights/index', {  title: 'All Flights', flights });
  } catch (err) {
    console.log(err);

    res.redirect('/');
  }
}

// Pass in all the tickets that have that flight ID (See Matthews comment in Homework)
// async function getTickets(req, res){
//   // get the flight document from the db 
//   const flight = await Flight.findById(req.params.id)

//   // get the tickets document from the db - passing the current flight id as a filter  
//   const tickets = await Tickets.find({ flight: flight._id })
  
//   // render the view, sending both the flight and ticket data through
//   res.render('myView/index', { flight, tickets })
// }
async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: flight._id })
    console.log(tickets);
    res.render('flights/show', { title: 'Flight Details', flight, tickets });
  } catch (err) {
    console.log(err);

    res.redirect('/flights');
  }
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
}


async function create(req, res) {

  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  try {
    await Flight.create(req.body);

    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}


module.exports = {
  index,
  create,
  new: newFlight,
  show,
};
