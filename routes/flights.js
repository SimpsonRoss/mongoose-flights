const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

// Show all flights
router.get('/', flightsCtrl.index);

// create a new flight
router.get('/new', flightsCtrl.new);

// create a new flight
router.get('/:id/tickets/new', ticketsCtrl.new);

// save a new ticket
router.post('/:id/tickets', ticketsCtrl.create);

// show a flight's details
router.get('/:id', flightsCtrl.show);

// save a new flight
router.post('/', flightsCtrl.create);

module.exports = router;