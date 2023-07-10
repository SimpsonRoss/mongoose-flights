const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// Show all flights
router.get('/', flightsCtrl.index);

// create a new flight
router.get('/new', flightsCtrl.new);

// show a flight's details
router.get('/:id', flightsCtrl.show);

// save a new flight
router.post('/', flightsCtrl.create);

module.exports = router;