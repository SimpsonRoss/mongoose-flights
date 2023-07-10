const Flight = require('../models/flight');

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    
    res.render('flights/index', {  title: 'All Flights', flights });
  } catch (err) {
    console.log(err);

    res.redirect('/');
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);

    res.render('flights/show', { title: 'Flight Details', flight });
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
